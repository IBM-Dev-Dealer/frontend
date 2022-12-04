import TextInput from "../../atoms/TextInput/TextInput";
import { linkColor } from "./Log.module.scss";
import Title from "../../atoms/Title/Title";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { ROUTES } from "../../../utils/utils";
import Button from "../../atoms/Button/Button";
import classNames from "classnames";
import { useNotifications } from "../../../context/hooks/useNotifications";
import {
  LOGIN_NOTIFICATION_ERROR_ID,
  LOGIN_NOTIFICATION_SUCCESS_ID,
  LOGIN_SUCCESS,
  NOTIFICATION_ERROR,
  NOTIFICATION_SUCCESS,
  SERVER_ERROR,
} from "../../../utils/constants";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validate = yup.object({
    email: yup.string().required("Email field empty"),
    password: yup.string().required("Password field empty"),
  });

  const { notify } = useNotifications();
  const submitHandler = (values) => {
    try {
      // console.log("values", values);
      notify({
        kind: NOTIFICATION_SUCCESS,
        message: LOGIN_SUCCESS,
        id: LOGIN_NOTIFICATION_SUCCESS_ID,
      });
    } catch (error) {
      notify({
        kind: NOTIFICATION_ERROR,
        message: SERVER_ERROR,
        id: LOGIN_NOTIFICATION_ERROR_ID,
      });
    }
  };

  const loginFormTailwindContainer = "flex items-center flex-col w-full mt-24";
  const formTailwind = "w-80 flex gap-2 flex-col";
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values) => {
        submitHandler(values);
      }}
    >
      {(formik) => (
        <div className={loginFormTailwindContainer}>
          <Title>Welcome back!</Title>
          <Form className={formTailwind}>
            <TextInput type='email' id='email' name='email' placeholder='Email' labelText='Email' />

            <TextInput
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              labelText='Password'
            />

            <Button type='submit' label='Submit' />
          </Form>

          <p className='mt-2 text-xs'>
            Not registered yet?{" "}
            <Link className={classNames("text-xs", linkColor)} href={ROUTES.REGISTER}>
              Click Here!
            </Link>
          </p>
        </div>
      )}
    </Formik>
  );
};

export default Login;
