import TextInput from '../../atoms/TextInput/TextInput';
import Title from '../../atoms/Title/Title';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validate = yup.object({
    email: yup.string().email('Invalid Email').required('Email field empty'),
    password: yup.string().required('Password field empty'),
  });

  return (
    <>
      <Title>Login or</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => {
          //   submitHandler(values);
          console.log('values', values);
        }}
      >
        {(formik) => (
          <div>
            <Form>
              <TextInput
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                labelText='Email'
              />

              <TextInput
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                labelText='Password'
              />

              <button type='submit'>Submit</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
