import Link from 'next/link';

const Login = () => {
  const register = '/register';

  return (
    <div>
      Login or <Link href={register}>Register</Link>
    </div>
  );
};

export default Login;
