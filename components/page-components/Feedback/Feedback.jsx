import Title from "../../atoms/Title/Title";
import * as yup from "yup";
import { Formik } from "formik";

const INITIAL_VALUES = {
  PM: {
    dev: "",
  },
};

const validate = { PM: yup.object({}) };

const Feedback = ({ loggedUserRole, projectId }) => {
  return (
    <div>
      <Title>Feedback</Title>
      <div>
        {loggedUserRole === "project-manager" && (
          <div>
            <Formik
              initialValues={INITIAL_VALUES.PM}
              validationSchema={validate.PM}
              onSubmit={(values) => {
                //   submitHandler(values);
                console.log("[AddProject] form values", values);
              }}
            ></Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
