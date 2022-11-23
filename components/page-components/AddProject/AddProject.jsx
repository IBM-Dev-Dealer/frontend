import Dropdown from '../../atoms/Dropdown/Dropdown';
import Title from '../../atoms/Title/Title';
import Button from '../../atoms/Button/Button';
import StringList from '../../atoms/StringList/StringList';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

const INITIAL_VALUES = {
  client: '',
  technologies: [],
  repos: [],
  slackChannels: [],
};

const AddProject = () => {
  const validate = yup.object({
    client: yup.string().required('Please enter client name'),
    technologies: yup.array().of(yup.string()).min(1).required(),
    repos: yup.array().of(yup.string()).min(1).required(),
    slackChannels: yup.array().of(yup.string()).min(1).required(),
  });

  return (
    <>
      <Title>Add Project</Title>
      <div className='w-full'>
        <div className='max-w-sm m-auto'>
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={validate}
            onSubmit={(values) => {
              //   submitHandler(values);
              console.log('[AddProject] form values', values);
            }}
          >
            {(formik) => {
              return (
                <Form>
                  <Dropdown
                    list={[
                      { label: 'item1', value: '#item1' },
                      { label: 'item2', value: '#item2' },
                      { label: 'item3', value: '#item3' },
                    ]}
                  />
                  <Button label={'prezz me'} type='button' />
                  <StringList
                    name='slackChannels'
                    textInput={{ label: 'label', id: 'addproject-stringlist', disabled: false }}
                  />
                  <Button label={'Submit'} type='submit' />
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddProject;
