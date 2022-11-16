import Head from 'next/head';
import Link from 'next/link';
import styles from './Layout.module.scss';

const Layout = ({ title = 'IBM Dev Dealer', logged = false, isPM, children }) => {
  const defaultPage = '/';
  const currentProject = '/current-project';
  const otherProjects = '/other-projects';
  const source = '/source';
  const log = '/log';
  const profile = '/profile';
  const manageEmployees = '/manage-employees';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.layout}>
        <nav>
          <Link href={defaultPage}>HOME</Link>
          <Link href={currentProject}>CURRENT PROJECT</Link>
          <Link href={otherProjects}>OTHER PROJECTS</Link>
          <Link href={source}>SOURCE</Link>
          <Link href={log}>{logged ? 'LOGOUT' : 'LOGIN/REGISTER'}</Link>
          {logged && <Link href={profile}>Profile</Link>}
          {isPM && <Link href={manageEmployees}>Manage Employees</Link>}
        </nav>
        <div>{children}</div>
        <footer>Copy rights AMAZING TEAM DEV DEALER</footer>
      </div>
    </>
  );
};

export default Layout;
