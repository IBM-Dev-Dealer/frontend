import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { ROUTES, getPageBackground, getTitle } from "../../../utils/utils";

import styles from "./Layout.module.scss";

const Layout = ({ logged = false, isPM = false, children }) => {
  const { pathname } = useRouter();
  const title = getTitle(pathname);
  const pageBackground = `background${getPageBackground(pathname)}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.logoWrapper}>logo</div>
          <nav className={styles.nav}>
            <Link className={styles.background1} href={ROUTES.DEFAULT_PAGE}>
              HOME
            </Link>
            <Link className={styles.background2} href={ROUTES.CURRENT_PROJECT}>
              CURRENT PROJECT
            </Link>
            <Link className={styles.background3} href={ROUTES.OTHER_PROJECTS}>
              OTHER PROJECTS
            </Link>
            <Link className={styles.background4} href={ROUTES.SOURCE}>
              SOURCE
            </Link>
            {logged && (
              <Link className={styles.background5} href={ROUTES.PROFILE}>
                PROFILE
              </Link>
            )}
            {isPM && (
              <Link
                className={styles.background6}
                href={ROUTES.MANAGE_EMPLOYEES}
              >
                MANAGE EMPLOYEES
              </Link>
            )}
            <Link className={styles.background7} href={ROUTES.LOG}>
              {logged ? "LOGOUT" : "LOGIN/REGISTER"}
            </Link>
          </nav>
        </header>

        <div className={`${styles.wrapper} ${styles[pageBackground]}`}>
          {children}
        </div>

        <footer className={`${styles.footer} ${styles[pageBackground]}`}>
          ©2022 DECÂT O ECHIPĂ
        </footer>
      </div>
    </>
  );
};

export default Layout;
