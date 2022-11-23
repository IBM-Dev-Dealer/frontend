import TextInput from "../../atoms/TextInput/TextInput";
import Title from "../../atoms/Title/Title";
import { Formik, Form } from "formik";
import * as Yup from "yup";
const Login = () => {
	const initialValues = {
		email: "",
		password: "",
	};

	const validate = Yup.object({
		email: Yup.string().email("Invalid Email").required("Email field empty"),
		password: Yup.string().required("Password field empty"),
	});

	return (
		<>
			<Title>Login or</Title>
			<Formik
				initialValues={initialValues}
				validationSchema={validate}
				onSubmit={(values) => {
					submitHandler(values);
				}}
			>
				{(formik) => (
					<div>
						<Form>
							<TextInput
								type="email"
								id="email"
								name="email"
								placeholder="Email"
								labelText="Email"
							/>

							<TextInput
								type="password"
								id="password"
								name="password"
								placeholder="Password"
								labelText="Password"
							/>

							<button type="submit">Submit</button>
						</Form>
					</div>
				)}
			</Formik>
		</>
	);
};

export default Login;
