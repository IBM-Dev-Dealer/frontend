import Title from "../../atoms/Title/Title";
import { Form, Formik } from "formik";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import StarRating from "../../atoms/StarRating/StarRating";
import { DIMENSIONS_RATING, INFO_MESSAGE } from "./constants";
import ObjectList from "../../molecules/ObjectList/ObjectList";
import { useEffect, useState } from "react";
import { useObjectListState } from "../../molecules/ObjectList/useObjectListState";
import Button from "../../atoms/Button/Button";
import Link from "next/link";
import { ROUTES, callAPI } from "../../../utils/utils";
import { INITIAL_VALUES, VALIDATE } from "./formikConstants";
import TextArea from "../../atoms/TextArea/TextArea";
import UnorderedList from "../../atoms/UnorderedList/UnorderedList";
import { useNotifications } from "../../../context/hooks/useNotifications";
import {
  FEEDBACK_NOTIFICATION_ERROR_ID,
  FEEDBACK_NOTIFICATION_SUCCESS_ID,
  FEEDBACK_SUCCESS,
  NOTIFICATION_ERROR,
  NOTIFICATION_SUCCESS,
  SERVER_ERROR,
} from "../../../utils/constants";

const GiveFeedback = ({
  loggedUserRoles,
  // devsWhoRequestedFeedback,
  // devData,
  newSeniorityLevelFields,
  projects,
}) => {
  const [feedbackView, setFeedbackView] = useState("");
  const [project, setProject] = useState("");
  const [newSeniorityLevelsVisible, setNewSeniorityLevelsVisible] = useState(false);

  const [developerList, setDeveloperList] = useState();
  const [seniorityLevelFields, setSeniorityLevelFields] = useState();

  const { objectList: newSeniorityLevels, setObjectList: setNewSeniorityLevels } =
    useObjectListState();

  const handleUpdateSeniority = async () => {
    setNewSeniorityLevelsVisible((prev) => !prev);
  };

  // console.log("[GiveFeedback] projects", projects);

  const { notify } = useNotifications();

  const submitDevHandler = async (values) => {
    const body = {
      from: 3, // TODO: replace with id of logged user
      projectName: project.projectName,
      rating: values.overallRating,
      pros: values.whatWentWell,
      cons: values.whatCouldBeImproved,
    };

    try {
      const res = await callAPI("/project_feedback", body, "POST");
      if (!res.ok) throw new Error();

      notify({
        kind: NOTIFICATION_SUCCESS,
        message: FEEDBACK_SUCCESS,
        id: FEEDBACK_NOTIFICATION_SUCCESS_ID,
      });
    } catch (error) {
      notify({
        kind: NOTIFICATION_ERROR,
        message: SERVER_ERROR,
        id: FEEDBACK_NOTIFICATION_ERROR_ID,
      });
    }
  };

  const submitManagerHandler = async (values) => {
    const body = {
      projectName: project.projectName,
      projectID: project.id,
      to: values.dev.id,
      businessResults: values.businessResults.label,
      clientSuccess: values.clientSuccess.label,
      innovation: values.innovation.label,
      teamInteractionRating: values.teamInteraction,
      suggestedSeniorityLevels: newSeniorityLevels,
    };
    try {
      const res = await callAPI("/user_feedback", body, "POST");
      if (!res.ok) throw new Error();
      notify({
        kind: NOTIFICATION_SUCCESS,
        message: FEEDBACK_SUCCESS,
        id: FEEDBACK_NOTIFICATION_SUCCESS_ID,
      });
    } catch (error) {
      notify({
        kind: NOTIFICATION_ERROR,
        message: SERVER_ERROR,
        id: FEEDBACK_NOTIFICATION_ERROR_ID,
      });
    }
  };

  useEffect(() => {
    const getDevelopers = async () => {
      const idsOfCurrentProjects = projects.map((p) => p.id);
      const devs = (await (await callAPI("/all_users")).json()).filter((d) => {
        if (!d.projectID) return false;
        let contains = false;
        const projectIDs = JSON.parse(d.projectID);
        projectIDs.forEach((id) => {
          if (idsOfCurrentProjects.includes(id)) contains = true;
        });
        return contains;
      });
      // console.log("devs", devs);
      setDeveloperList(devs);
    };
    if (project) getDevelopers();
  }, [project, projects]);

  useEffect(() => {
    const getFieldsContents = async () => {
      // const queriedFields = Object.keys(JSON.parse(developerList[0].techStacks)[0]);
      // const queryParams = `${queriedFields.map((qField) => `fields=${qField}`).join("&")}`;
      // const fields = await (await callAPI(`/getFields?${queryParams}`, null, "GET", true)).json();

      setSeniorityLevelFields(newSeniorityLevelFields);
    };
    if (developerList) {
      getFieldsContents();
    }
  }, [developerList, newSeniorityLevelFields]);

  return (
    <div>
      <Title>
        Give Feedback{" "}
        <Link
          href={ROUTES.REQUEST_FEEDBACK}
          className='cursor-pointer border-b hover:border-black border-transparent active:opacity-20'
        >
          Want to request feedback instead?
        </Link>
      </Title>
      <div className='mb-6 max-w-xl m-auto'>
        <Dropdown
          infoMessage={INFO_MESSAGE.PROJECT}
          infoMessagePosition='right'
          list={projects.map((prj) => ({ ...prj, label: `${prj.client} - ${prj.projectName}` }))}
          placeholder={"Select Project"}
          select={(project) => setProject(project)}
          selected={project}
        />
        {project && (
          <Dropdown
            infoMessage={INFO_MESSAGE.FEEDBACK_VIEW}
            infoMessagePosition='right'
            list={loggedUserRoles.map((role) => ({ label: role }))}
            placeholder={
              feedbackView ? `Give feedback as: ${feedbackView}` : "Select Feedback View"
            }
            select={(role) => setFeedbackView(role.label)}
          />
        )}
      </div>

      <div>
        {feedbackView === "project-manager" && (
          <div className='max-w-md m-auto'>
            <div className='text-center	drop-shadow-sm text-xl mb-2'>
              Give feedback to a developer
            </div>
            <Formik
              initialValues={INITIAL_VALUES.PM}
              validationSchema={VALIDATE.PM}
              onSubmit={(values) => {
                submitManagerHandler(values);
              }}
            >
              {(formik) => {
                return (
                  <Form
                    onKeyDown={(e) => (e.key === "Enter" ? e.preventDefault() : null)}
                    className='flex flex-col gap-2'
                  >
                    <Dropdown
                      name='dev'
                      // list={devsWhoRequestedFeedback}
                      list={developerList.map((d) => ({
                        ...d,
                        label: `${d.firstName} ${d.lastName}`,
                      }))}
                      placeholder='Developer to give feedback to'
                      select={(dev) => {
                        setNewSeniorityLevelsVisible(false);
                        formik.resetForm();
                        formik.setFieldValue("dev", dev);
                      }}
                      selected={formik.values.dev}
                    />
                    {formik.values.dev && (
                      <div className='flex flex-col gap-2 pt-2 border-t border-transparent-gray-05 px-4'>
                        <Dropdown
                          name='businessResults'
                          list={DIMENSIONS_RATING}
                          placeholder='Business Results'
                          selected={formik.values.businessResults}
                          select={(value) => formik.setFieldValue("businessResults", value)}
                          infoMessage={INFO_MESSAGE.BUSINESS_RESULTS}
                        />

                        <Dropdown
                          name='clientSuccess'
                          list={DIMENSIONS_RATING}
                          placeholder='Client Success'
                          selected={formik.values.clientSuccess}
                          select={(value) => formik.setFieldValue("clientSuccess", value)}
                          infoMessage={INFO_MESSAGE.CLIENT_SUCCESS}
                        />

                        <Dropdown
                          name='innovation'
                          list={DIMENSIONS_RATING}
                          placeholder='Innovation'
                          selected={formik.values.innovation}
                          select={(value) => formik.setFieldValue("innovation", value)}
                          infoMessage={INFO_MESSAGE.INNOVATION}
                        />

                        <StarRating
                          name='teamInteraction'
                          rating={formik.values.teamInteraction}
                          setRating={(value) => formik.setFieldValue("teamInteraction", value)}
                          maxRating={5}
                          label={"Team Interaction"}
                          infoMessage={INFO_MESSAGE.TEAM_INTERACTION}
                        />

                        {formik.values.dev && (
                          <UnorderedList
                            label={"Previous seniority levels per technology"}
                            list={JSON.parse(formik.values.dev.techStacks)}
                            onClick={handleUpdateSeniority}
                            changeEnabler={{
                              enablesChange: true,
                              label: "Update seniority levels?",
                              isChangeComponentVisible: newSeniorityLevelsVisible,
                            }}
                          />
                        )}

                        {newSeniorityLevelsVisible && seniorityLevelFields && (
                          <ObjectList
                            name='newSeniorityLevels'
                            dataFields={[
                              {
                                ...seniorityLevelFields["technology"],
                                // fields: devData.techSeniority.map((t) => t.technology), // uses only fields in list
                              } ?? [],
                              seniorityLevelFields["seniorityLevel"] ?? [],
                            ]}
                            list={newSeniorityLevels}
                            setList={setNewSeniorityLevels}
                            label='New Seniority Levels'
                          />
                        )}

                        <TextArea
                          label={"Add more feedback"}
                          name='additionalFeedback'
                          setValue={formik.setFieldValue}
                          value={formik.values.additionalFeedback}
                        />

                        <Button label='Submit Feedback' type='submit' />
                      </div>
                    )}
                  </Form>
                );
              }}
            </Formik>
          </div>
        )}

        {feedbackView === "dev" && (
          <div className='max-w-md m-auto'>
            <div className='text-center	drop-shadow-sm text-xl mb-2'>Give feedback to a project</div>
            <Formik
              initialValues={INITIAL_VALUES.DEV}
              validationSchema={VALIDATE.DEV}
              onSubmit={(values) => {
                submitDevHandler(values);
              }}
            >
              {(formik) => {
                return (
                  <Form
                    onKeyDown={(e) => (e.key === "Enter" ? e.preventDefault() : null)}
                    className='flex flex-col gap-2'
                  >
                    <StarRating
                      name='overallRating'
                      rating={formik.values.overallRating}
                      setRating={(value) => formik.setFieldValue("overallRating", value)}
                      maxRating={5}
                      label={"Overall Rating"}
                      infoMessage={
                        "Rating of the overall project. How well did the project go. How satisfying or stressful it was. How were the tasks managed."
                      }
                    />

                    <TextArea
                      label={"What went well"}
                      name='whatWentWell'
                      setValue={formik.setFieldValue}
                      value={formik.values.whatWentWell}
                    />

                    <TextArea
                      label={"What could be improved"}
                      name='whatCouldBeImproved'
                      setValue={formik.setFieldValue}
                      value={formik.values.whatCouldBeImproved}
                    />

                    <Button label='Submit Feedback' type='submit' />
                  </Form>
                );
              }}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiveFeedback;
