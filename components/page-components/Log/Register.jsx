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

// Register page fields:
// email
// parola
// confirmare parola
// first name
// last name
// grad senioritate per tehnologii
// experienta (ani)
// company role (array cu valori din enum - multi-rol)

const initialValues = {
	email: "",
	password: "",
	rePassword: "",
	firstname: "",
	lastname: "",
	technologies: [],
	experience: "",
};

const validate = yup.object({
	email: yup
		.string()
		.email("Invalid email format")
		.required("Email field empty"),
	password: yup.string().required("Password field empty"),
	firstname: yup.string().required("Firstname field empty"),
	lastname: yup.string().required("Lastname field empty"),
	password: yup
		.string()
		.required("Password field empty")
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
			"min 6 length = 0-9,a-z,A-Z and specials"
		),
	rePassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords not matched")
		.required("Re-password field empty"),
	technologies: yup.array().of(yup.object()),
	experience: yup.string().required("Experience is required"),
});

const Register = ({ fields }) => {
	const { objectList: technologies, setObjectList: setTechnologies } =
		useObjectListState();
	const technologiesDataFields = useMemo(
		() => [fields["technology"] ?? [], fields["seniorityLevel"] ?? []],
		[fields]
	);

	const handleOnChange = useCallback(
		(setFormData, fieldName) => (data) => setFormData(fieldName, data),
		[]
	);

	const loginFormTailwindContainer = "flex items-center flex-col w-full mt-24";

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
				<div className={loginFormTailwindContainer}>
					<Title>Register to get started!</Title>

					<Form className="w-80 flex gap-2 flex-col">
						<TextInput
							type="email"
							id="email"
							name="email"
							placeholder="Email"
							labelText="Email"
						/>
						<div>
							<TextInput
								type="text"
								id="firstname"
								name="firstname"
								placeholder="Firstname"
								labelText="Firstname"
							/>
							<TextInput
								type="text"
								id="lastname"
								name="lastname"
								placeholder="Lastname"
								labelText="Lastname"
							/>
						</div>
						<div>
							<TextInput
								type="password"
								id="password"
								name="password"
								placeholder="Password"
								labelText="Password"
							/>
							<TextInput
								type="password"
								id="rePassword"
								name="rePassword"
								placeholder="Repeat password"
								labelText="Repeat password"
							/>
							<ObjectList
								setList={setTechnologies}
								list={technologies}
								onChange={handleOnChange(formik.setFieldValue, "technologies")}
								name="technologies"
								dataFields={technologiesDataFields}
								label="Add Technologies"
							/>
							<TextInput
								type="number"
								id="experience"
								name="experience"
								placeholder="Years"
								labelText="Years of experience"
							/>
						</div>
						<Button type="submit" label="Submit" />
					</Form>

					<p className="mt-2 text-xs">
						Not registered yet?{" "}
						<Link className={classNames("text-xs")} href={ROUTES.LOG}>
							Click Here!
						</Link>
					</p>
				</div>
			)}
		</Formik>
	);
};

export default Register;
