import Link from 'next/link';

import { ROUTES } from '../../../utils/utils';
import Title from '../../atoms/Title/Title';

const Login = () => {
  return (
    <Title>
      Login or <Link href={ROUTES.REGISTER}>Register</Link>
    </Title>
  );
};

export default Login;
