import Link from 'next/link';

import { ROUTES } from '../../../utils/utils';

const Login = () => {
  return (
    <div>
      Login or <Link href={ROUTES.REGISTER}>Register</Link>
    </div>
  );
};

export default Login;
