import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ROUTES, getPageBackground, getTitle } from '../../../utils/utils';

import styles from './Layout.module.scss';

const Layout = ({ logged = false, isPM = false, children }) => {
  const { pathname } = useRouter();
  const title = getTitle(pathname);
  const pageBackground = `page${getPageBackground(pathname)}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.logoWrapper}>IBM Dev Dealer</div>
          <nav className={styles.nav}>
            <Link className={styles.link1} href={ROUTES.DEFAULT_PAGE}>
              Home
            </Link>
            <Link className={styles.link2} href={ROUTES.CURRENT_PROJECT}>
              Current Project
            </Link>
            <Link className={styles.link2} href={ROUTES.ADD_PROJECT}>
              Add Project
            </Link>
            <Link className={styles.link3} href={ROUTES.OTHER_PROJECTS}>
              Other Projects
            </Link>
            <Link className={styles.link4} href={ROUTES.SOURCE}>
              Source
            </Link>
            {logged && (
              <Link className={styles.link5} href={ROUTES.PROFILE}>
                Profile
              </Link>
            )}
            {isPM && (
              <Link className={styles.link6} href={ROUTES.MANAGE_EMPLOYEES}>
                Manage Employees
              </Link>
            )}
            <Link className={styles.link7} href={ROUTES.LOG}>
              {logged ? 'Logout' : 'Login/Register'}
            </Link>
          </nav>
        </header>

        <div className={`${styles.wrapper} ${styles[pageBackground]}`}>
          <div className={styles.content}>{children}</div>
          <footer className={styles.footer}>©2022 DECÂT O ECHIPĂ</footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
