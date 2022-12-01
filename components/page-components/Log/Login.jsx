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
			console.log("values", values);
			notify({
				kind: "success",
				message: "Logged in successfully!",
				id: Math.floor(Math.random() * 10000).toString(),
			});
		} catch (error) {
			notify({
				kind: "error",
				message: "Server error!",
				id: Math.floor(Math.random() * 10000).toString(),
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

						<Button type="submit" label="Submit" />
					</Form>

					<p className="mt-2 text-xs">
						Not registered yet?{" "}
						<Link
							className={classNames("text-xs", linkColor)}
							href={ROUTES.REGISTER}
						>
							Click Here!
						</Link>
					</p>
				</div>
			)}
		</Formik>
	);
};

export default Login;
