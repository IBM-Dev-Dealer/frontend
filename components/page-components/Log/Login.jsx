import Link from "next/link";

import { ROUTES } from "../../../utils/utils";
import TextInput from "../../atoms/TextInput/TextInput";
import Title from "../../atoms/Title/Title";

const Login = () => {
	return (
		<Title>
			Login or <Link href={ROUTES.REGISTER}>Register</Link>
			<TextInput />
		</Title>
	);
};

export default Login;
