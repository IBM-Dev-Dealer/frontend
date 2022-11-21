import Link from 'next/link';

import { ROUTES } from '../../../utils/utils';

const Register = () => {
  return (
    <div>
      Register or <Link href={ROUTES.LOG}>Login</Link>
    </div>
  );
};

export default Register;
