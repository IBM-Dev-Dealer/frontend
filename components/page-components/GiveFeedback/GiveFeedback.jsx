import Title from "../../atoms/Title/Title";
import { Form, Formik } from "formik";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import StarRating from "../../atoms/StarRating/StarRating";
import { DIMENSIONS_RATING, INFO_MESSAGE } from "./constants";
import ObjectList from "../../molecules/ObjectList/ObjectList";
import { useState } from "react";
import { useObjectListState } from "../../molecules/ObjectList/useObjectListState";
import Button from "../../atoms/Button/Button";
import Link from "next/link";
import { ROUTES } from "../../../utils/utils";
import { INITIAL_VALUES, VALIDATE } from "./formikConstants";

const GiveFeedback = ({
  loggedUserRoles,
  projectId,
  devsWhoRequestedFeedback,
  devData,
  newSeniorityLevelFields,
}) => {
  const [feedbackView, setFeedbackView] = useState("");
  const [newSeniorityLevelsVisible, setNewSeniorityLevelsVisible] = useState(false);

  const { objectList: newSeniorityLevels, setObjectList: setNewSeniorityLevels } =
    useObjectListState();

  const handleUpdateSeniority = async () => {
    setNewSeniorityLevelsVisible((prev) => !prev);
  };

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
          infoMessage={INFO_MESSAGE.FEEDBACK_VIEW}
          infoMessagePosition='right'
          list={loggedUserRoles.map((role) => ({ label: role }))}
          placeholder={feedbackView ? `Give feedback as: ${feedbackView}` : "Select Feedback View"}
          select={(role) => setFeedbackView(role.label)}
        />
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
                //   submitHandler(values);
                console.log("[AddProject] form values", values);
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
                      list={devsWhoRequestedFeedback}
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

                        {/* TODO: replace with proper list component - UNORDERED LIST */}
                        {devData && (
                          <div className='my-2'>
                            <div className='text-sm'>Previous seniority levels per technology</div>
                            <ul className='p-4 bg-transparent-gray-05 rounded-lg my-2 shadow-md'>
                              {devData.techSeniority.map((item, i) => (
                                <li
                                  key={i}
                                  className='text-sm'
                                >{`${item.technology.label} / ${item.seniorityLevel.label}`}</li>
                              ))}
                            </ul>
                            <div className='flex justify-end'>
                              <span
                                className='text-xs inline-flex cursor-pointer active:opacity-25 select-none border-b hover:border-black border-transparent'
                                onClick={handleUpdateSeniority}
                                role='presentation'
                              >
                                <span className='text-xs inline-flex cursor-pointer active:opacity-25 select-none'>
                                  Update seniority levels?
                                </span>
                                <span className=' text-xs inline-flex cursor-pointer active:opacity-25 select-none text-gray ml-1'>
                                  {"  "}
                                  Click to {newSeniorityLevelsVisible ? "hide" : "show"}
                                </span>
                              </span>
                            </div>
                          </div>
                        )}

                        {newSeniorityLevelsVisible && (
                          <ObjectList
                            name='newSeniorityLevels'
                            dataFields={[
                              {
                                ...newSeniorityLevelFields["technology"],
                                // fields: devData.techSeniority.map((t) => t.technology), // uses only fields in list
                              } ?? [],
                              newSeniorityLevelFields["seniorityLevel"] ?? [],
                            ]}
                            list={newSeniorityLevels}
                            setList={(newList) => {
                              formik.setFieldValue("newSeniorityLevels", newList);
                              return setNewSeniorityLevels(newList);
                            }}
                            label='New Seniority Levels'
                          />
                        )}

                        {/* TODO: replace with proper list component - TEXT AREA */}
                        <div className='flex flex-col gap-2 my-2'>
                          <div className='text-sm'>Add more feedback</div>
                          <textarea
                            className={`w-full shadow-md border p-4 rounded-xl outline-none focus:outline-4 
                            text-sm overflow-auto`}
                            name='additionalFeedback'
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                formik.setFieldValue(
                                  "additionalFeedback",
                                  `${formik.values.additionalFeedback}\r\n`,
                                );
                              }
                            }}
                            value={formik.values.additionalFeedback}
                            onChange={(e) => {
                              formik.setFieldValue("additionalFeedback", e.target.value);
                            }}
                            rows={8}
                          />
                        </div>

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
                //   submitHandler(values);
                console.log("[AddProject] form values", values);
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

                    {/* TODO: replace with proper list component - TEXT AREA */}
                    <div className='flex flex-col gap-2 my-2'>
                      <div className='text-sm'>What went well</div>
                      <textarea
                        className={`w-full shadow-md border p-4 rounded-xl outline-none focus:outline-4 
                            text-sm overflow-auto`}
                        name='whatWentWell'
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            formik.setFieldValue(
                              "whatWentWell",
                              `${formik.values.whatWentWell}\r\n`,
                            );
                          }
                        }}
                        value={formik.values.whatWentWell}
                        onChange={(e) => {
                          formik.setFieldValue("whatWentWell", e.target.value);
                        }}
                        rows={8}
                      />
                    </div>

                    {/* TODO: replace with proper list component - TEXT AREA */}
                    <div className='flex flex-col gap-2 my-2'>
                      <div className='text-sm'>What could be improved</div>
                      <textarea
                        className={`w-full shadow-md border p-4 rounded-xl outline-none focus:outline-4 
                            text-sm overflow-auto`}
                        name='whatCouldBeImproved'
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            formik.setFieldValue(
                              "whatCouldBeImproved",
                              `${formik.values.whatCouldBeImproved}\r\n`,
                            );
                          }
                        }}
                        value={formik.values.whatCouldBeImproved}
                        onChange={(e) => {
                          formik.setFieldValue("whatCouldBeImproved", e.target.value);
                        }}
                        rows={8}
                      />
                    </div>

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
