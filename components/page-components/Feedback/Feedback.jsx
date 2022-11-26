import Title from "../../atoms/Title/Title";
import * as yup from "yup";
import { Form, Formik } from "formik";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import StarRating from "../../atoms/StarRating/StarRating";
import { DIMENSIONS_RATING } from "./staticVariables";
import ObjectList from "../../molecules/ObjectList/ObjectList";
import { useState } from "react";
import { useObjectListState } from "../../molecules/ObjectList/useObjectListState";

const INITIAL_VALUES = {
  PM: {
    dev: "",
    teamInteraction: 1,
    businessResults: null,
    clientSuccess: null,
    innovation: null,
    newSeniorityLevels: [],
    additionalFeedback: "",
  },
};

const VALIDATE = {
  PM: yup.object({
    dev: yup.string(),
    teamInteraction: yup.number(),
    businessResults: yup.object({ label: yup.string(), codename: yup.string() }),
    clientSuccess: yup.object({ label: yup.string(), codename: yup.string() }),
    innovation: yup.object({ label: yup.string(), codename: yup.string() }),
    newSeniorityLevels: yup
      .array()
      .of(yup.object({ technology: yup.object(), seniorityLevel: yup.object() })),
    additionalFeedback: yup.string(),
  }),
};

const Feedback = ({
  loggedUserRole,
  projectId,
  devsWhoRequestedFeedback,
  devData,
  newSeniorityLevelFields,
}) => {
  const [newSeniorityLevelsVisible, setNewSeniorityLevelsVisible] = useState(false);

  const { objectList: newSeniorityLevels, setObjectList: setNewSeniorityLevels } =
    useObjectListState();

  const handleUpdateSeniority = async () => {
    setNewSeniorityLevelsVisible((prev) => !prev);
  };

  return (
    <div>
      <Title>Feedback</Title>
      <div>
        {loggedUserRole === "project-manager" && (
          <div className='max-w-md m-auto'>
            <Formik
              initialValues={INITIAL_VALUES.PM}
              validationSchema={VALIDATE.PM}
              onSubmit={(values) => {
                //   submitHandler(values);
                console.log("[AddProject] form values", values);
              }}
            >
              {(formik) => {
                console.log(formik.values);
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
                          infoMessage='This section will evaluate your individual contribution to the account results: how you delivered your key committed business and financial objectives.'
                        />

                        <Dropdown
                          name='clientSuccess'
                          list={DIMENSIONS_RATING}
                          placeholder='Client Success'
                          selected={formik.values.clientSuccess}
                          select={(value) => formik.setFieldValue("clientSuccess", value)}
                          infoMessage='Your individual contribution to client success. Rates your impact on client outcomes by going above and beyond to add value to internal and/or external IBM clients. Creates work products that meet client expectation. Delivers quality work products. Effective time management. Effective communication.'
                        />

                        <Dropdown
                          name='innovation'
                          list={DIMENSIONS_RATING}
                          placeholder='Innovation'
                          selected={formik.values.innovation}
                          select={(value) => formik.setFieldValue("innovation", value)}
                          infoMessage='Your demonstration of innovation through leveraging intellectual capital and best practices to bring improvements in how we work and what we deliver. Locates internal intellectual capital and connects with experts.'
                        />

                        <StarRating
                          name='teamInteraction'
                          rating={formik.values.teamInteraction}
                          setRating={(value) => formik.setFieldValue("teamInteraction", value)}
                          maxRating={5}
                          label={"Team Interaction"}
                          infoMessage={
                            "Your collaboration and teaming to cultivate positive working relationships with project team members and other stakeholders, such as clients and partners."
                          }
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
                                >{`${item.technology.label} - ${item.seniorityLevel.label}`}</li>
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
                            // list={formik.values.newSeniorityLevels}
                            list={newSeniorityLevels}
                            setList={(newList) => {
                              formik.setFieldValue("newSeniorityLevels", newList);
                              return setNewSeniorityLevels(newList);
                            }}
                            label='New Seniority Levels'
                          />
                        )}

                        {/* TODO: replace with proper list component - TEXT AREA */}
                        <div className='flex flex-col gap-2'>
                          <div className='text-sm'>Add more feedback</div>
                          <textarea
                            name='additionalFeedback'
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                console.log(formik.values.additionalFeedback);
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
                            rows={12}
                            className='w-full shadow-md border p-4 rounded-xl outline-none focus:outline-4'
                          />
                        </div>
                      </div>
                    )}
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

export default Feedback;
