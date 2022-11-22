import Link from 'next/link';

import { ROUTES } from '../../../utils/utils';
import Title from '../../atoms/Title/Title';

const Register = () => {
  return (
    <Title>
      Register or <Link href={ROUTES.LOG}>Login</Link>
    </Title>
  );
};

export default Register;
