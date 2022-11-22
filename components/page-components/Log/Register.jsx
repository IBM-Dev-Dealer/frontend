import Link from "next/link";

import { ROUTES } from "../../../utils/utils";
import TextInput from "../../atoms/TextInput/TextInput";
import Title from "../../atoms/Title/Title";

const Register = () => {
	return (
		<Title>
			Register or <Link href={ROUTES.LOG}>Login</Link>
			<TextInput />
		</Title>
	);
};

export default Register;
