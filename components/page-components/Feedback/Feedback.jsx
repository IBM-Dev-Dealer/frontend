import Title from "../../atoms/Title/Title";
import * as yup from "yup";
import { Form, Formik } from "formik";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import StarRating from "../../atoms/StarRating/StarRating";
import { DIMENSIONS_RATING } from "./staticVariables";

const INITIAL_VALUES = {
  PM: {
    dev: "",
    teamInteraction: 1,
    businessResults: null,
    clientSuccess: null,
    innovation: null,
  },
};

const VALIDATE = {
  PM: yup.object({
    dev: yup.string(),
    teamInteraction: yup.number(),
    businessResults: yup.object({ label: yup.string(), codename: yup.string() }),
    clientSuccess: yup.object({ label: yup.string(), codename: yup.string() }),
    innovation: yup.object({ label: yup.string(), codename: yup.string() }),
  }),
};

const Feedback = ({ loggedUserRole, projectId, devsWhoRequestedFeedback }) => {
  return (
    <div>
      <Title>Feedback</Title>
      <div>
        {loggedUserRole === "project-manager" && (
          <div className='max-w-sm m-auto'>
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
                      select={(dev) => formik.setFieldValue("dev", dev)}
                      selected={formik.values.dev}
                    />
                    {formik.values.dev && (
                      <div className='flex flex-col gap-2'>
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
