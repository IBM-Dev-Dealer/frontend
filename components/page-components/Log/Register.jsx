import Link from "next/link";

import { ROUTES } from "../../../utils/utils";
import Title from "../../atoms/Title/Title";
import { Form, Formik } from "formik";
import * as yup from "yup";
import TextInput from "../../atoms/TextInput/TextInput";
import Button from "../../atoms/Button/Button";
import classNames from "classnames";
import ObjectList from "../../molecules/ObjectList/ObjectList";
import { useObjectListState } from "../../molecules/ObjectList/useObjectListState";
import { useCallback, useMemo } from "react";
import { useStringListState } from "../../molecules/StringList/useStringListState";
import StringList from "../../molecules/StringList/StringList";
import { linkColor } from "./Log.module.scss";

const initialValues = {
  email: "",
  password: "",
  rePassword: "",
  firstname: "",
  lastname: "",
  technologies: [],
  experience: "",
  roleName: "",
  roles: [],
};

const validate = yup.object({
  email: yup.string().email("Invalid email format").required("Email field empty"),
  firstname: yup.string().required("Firstname field empty"),
  lastname: yup.string().required("Lastname field empty"),
  password: yup
    .string()
    .required("Password field empty")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      "min 6 length = 0-9,a-z,A-Z and specials",
    ),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords not matched")
    .required("Re-password field empty"),
  technologies: yup.array().of(yup.object()),
  experience: yup.string().required("Experience is required"),
  roleName: yup.string(),
  roles: yup.array().of(yup.string()).min(1).required(),
});

const Register = ({ fields }) => {
  const { objectList: technologies, setObjectList: setTechnologies } = useObjectListState();
  const technologiesDataFields = useMemo(
    () => [fields["technology"] ?? [], fields["seniorityLevel"] ?? []],
    [fields],
  );

  const handleOnChange = useCallback(
    (setFormData, fieldName) => (data) => setFormData(fieldName, data),
    [],
  );

  const {
    stringList: rolesList,
    setStringList: setRolesList,
    stringInputValue: rolesInputValue,
    setStringInputValue: setRolesInputValue,
    inputWasTouched: rolesInputWasTouched,
    setInputWasTouched: setRolesInputWasTouched,
  } = useStringListState();

  const registerFormTailwindContainer = "flex items-center flex-col w-full mt-6";
  const formFieldsContainerTailwind = "w-3/4 flex gap-20 justify-center items-center flex-wrap";
  const formSectionTaiwind = "flex-1 flex flex-col gap-2";
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values) => {
        //   submitHandler(values);
        console.log("values", values);
      }}
    >
      {(formik) => (
        <div className={registerFormTailwindContainer}>
          <Title>Register to get started!</Title>

          <Form className={formFieldsContainerTailwind}>
            <div className={formSectionTaiwind}>
              <TextInput
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                labelText='Email'
              />

              <TextInput
                type='text'
                id='firstname'
                name='firstname'
                placeholder='Firstname'
                labelText='Firstname'
              />
              <TextInput
                type='text'
                id='lastname'
                name='lastname'
                placeholder='Lastname'
                labelText='Lastname'
              />

              <TextInput
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                labelText='Password'
              />
              <TextInput
                type='password'
                id='rePassword'
                name='rePassword'
                placeholder='Repeat password'
                labelText='Repeat password'
              />
            </div>

            <div className='flex-1'>
              <ObjectList
                setList={setTechnologies}
                list={technologies}
                onChange={handleOnChange(formik.setFieldValue, "technologies")}
                name='technologies'
                dataFields={technologiesDataFields}
                label='Add Technologies'
              />
              <TextInput
                type='number'
                id='experience'
                name='experience'
                placeholder='Years'
                labelText='Years of experience'
              />
              <StringList
                setList={setRolesList}
                list={rolesList}
                onChange={handleOnChange(formik.setFieldValue, "roles")}
                name='repos'
                textInput={{
                  label: "Roles in compnay",
                  id: "add-roles",
                  name: "roleName",
                  value: rolesInputValue,
                  setValue: setRolesInputValue,
                  touch: () => setRolesInputWasTouched(true),
                  untouch: () => setRolesInputWasTouched(false),
                  wasTouched: rolesInputWasTouched,
                }}
              />
              <Button type='submit' label='Submit' />
            </div>
          </Form>

          <p className='mt-6 text-xs'>
            Registered?
            <Link className={classNames("text-xs", linkColor)} href={ROUTES.LOG}>
              Login Here!
            </Link>
          </p>
        </div>
      )}
    </Formik>
  );
};

export default Register;
