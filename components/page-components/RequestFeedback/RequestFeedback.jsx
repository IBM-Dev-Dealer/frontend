import { Form, Formik } from "formik";
import Link from "next/link";
import { useMemo, useState } from "react";
import * as yup from "yup";
import { ROUTES } from "../../../utils/utils";
import Button from "../../atoms/Button/Button";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import Title from "../../atoms/Title/Title";

const INITIAL_VALUES = {
  project: null,
  feedback: "",
};
const VALIDATE = yup.object({
  project: yup.object({}),
  feedback: yup.string(),
});

const RequestFeedback = ({ projects }) => {
  const mappedProjects = useMemo(
    () => projects.map((project) => ({ ...project, label: project.name })),
    [projects],
  );

  const [isProjectSelected, setIsProjectSelected] = useState(false);
  return (
    <div>
      <Title>
        Request Feedback{" "}
        <Link
          href={ROUTES.GIVE_FEEDBACK}
          className='cursor-pointer border-b hover:border-black border-transparent active:opacity-20'
        >
          Want to give feedback instead?
        </Link>
      </Title>
      <div className='text-center	drop-shadow-sm text-xl mb-2'>
        Request feedback for a certain project
      </div>
      <div className='mb-6 max-w-xl min-w-fit m-auto'>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={VALIDATE}
          onSubmit={(values) => {
            //   submitHandler(values);
            console.log("[RequestFeedback] form values", values);
          }}
        >
          {(formik) => {
            return (
              <Form
                onKeyDown={(e) => (e.key === "Enter" ? e.preventDefault() : null)}
                className='flex flex-col gap-2'
              >
                <div className='mb-2'>
                  <Dropdown
                    name='project'
                    list={mappedProjects}
                    placeholder="Project you've worked on"
                    select={(dev) => {
                      formik.resetForm();
                      formik.setFieldValue("project", dev);
                      setIsProjectSelected(true);
                    }}
                    selected={formik.values.dev}
                    infoMessage={
                      "Select the project you want to get feedback for. Add in the text field below all the activity you have had on this project for which you want feedback. If nothing is added in the text field, the default feedback request will be submitted. Once submitted, you will not be able to change the feedback request."
                    }
                    infoMessagePosition='left'
                  />
                </div>
                {isProjectSelected && (
                  <div className='flex flex-col gap-2 pt-2 border-t border-transparent-gray-05 px-4'>
                    {/* TODO: replace with proper list component - TEXT AREA */}
                    <div className='flex flex-col gap-2 my-2'>
                      <div className='text-sm'>Add everything you want to get feedback for</div>
                      <textarea
                        className={`w-full shadow-md border p-4 rounded-xl outline-none focus:outline-4 
                            text-sm overflow-auto`}
                        name='feedback'
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            formik.setFieldValue("feedback", `${formik.values.feedback}\r\n`);
                          }
                        }}
                        value={formik.values.feedback}
                        onChange={(e) => {
                          formik.setFieldValue("feedback", e.target.value);
                        }}
                        rows={8}
                      />
                    </div>
                    <Button label='Submit' type='submit' />
                  </div>
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default RequestFeedback;
