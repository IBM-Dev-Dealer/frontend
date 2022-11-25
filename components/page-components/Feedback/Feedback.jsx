import Title from "../../atoms/Title/Title";
import * as yup from "yup";
import { Form, Formik } from "formik";
import Dropdown from "../../atoms/Dropdown/Dropdown";

const INITIAL_VALUES = {
  PM: {
    dev: "",
  },
};

const VALIDATE = {
  PM: yup.object({
    dev: yup.string(),
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
                  <Form onKeyDown={(e) => (e.key === "Enter" ? e.preventDefault() : null)}>
                    <Dropdown
                      name='dev'
                      list={devsWhoRequestedFeedback}
                      placeholder='Developer to give feedback to'
                      select={(dev) => formik.setFieldValue("dev", dev)}
                      selected={formik.values.dev}
                    />
                    {formik.values.dev && <div>rest</div>}
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
