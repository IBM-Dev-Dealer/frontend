import Head from "next/head";
import Link from "next/link";
import Error from "../Error/Error";
import { useRouter } from "next/router";

import { ROUTES, colorizeJSXArray, getTitle } from "../../../utils/utils";

import styles from "./Layout.module.scss";

const Layout = ({ logged = true, isPM = false, error, children }) => {
  const { pathname } = useRouter();
  const title = getTitle(pathname);

  const navLinks = logged
    ? [
        <Link href={ROUTES.DEFAULT_PAGE} key={ROUTES.DEFAULT_PAGE}>
          Home
        </Link>,
        <Link href={ROUTES.CURRENT_PROJECT} key={ROUTES.CURRENT_PROJECT}>
          Current Project
        </Link>,
        <Link href={ROUTES.ADD_PROJECT} key={ROUTES.ADD_PROJECT}>
          Add Project
        </Link>,
        <Link href={ROUTES.OTHER_PROJECTS} key={ROUTES.OTHER_PROJECTS}>
          Other Projects
        </Link>,
        <Link href={ROUTES.FEEDBACK} key={ROUTES.FEEDBACK}>
          Feedback
        </Link>,
        <Link href={ROUTES.SOURCE} key={ROUTES.SOURCE}>
          Source
        </Link>,
        <Link href={ROUTES.PROFILE} key={ROUTES.PROFILE}>
          Profile
        </Link>,
        isPM ? (
          <Link href={ROUTES.MANAGE_EMPLOYEES} key={ROUTES.MANAGE_EMPLOYEES}>
            Manage Employees
          </Link>
        ) : null,
        <Link href={ROUTES.LOG} key={ROUTES.LOG}>
          Logout
        </Link>,
      ]
    : [
        <Link href={ROUTES.LOG} key={ROUTES.LOG}>
          Login
        </Link>,
        <Link href={ROUTES.REGISTER} key={ROUTES.REGISTER}>
          Register
        </Link>,
      ];

  const navLinksColorized = colorizeJSXArray(navLinks);
  const selectedLink = navLinksColorized.find((link) => link.props.href === pathname);
  const colorIndex = selectedLink?.props.className.split("Bg")[1];

  return (
    <div className='flex h-fit'>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.logoWrapper}>IBM Dev Dealer</div>
          <nav className={styles.nav}>{navLinksColorized}</nav>
        </header>

        <div className={`${styles.wrapper} mainColorBorder${colorIndex}`}>
          {error ? <Error error={error} /> : <div>{children}</div>}
          <footer className={styles.footer}>© 2022 Decât o echipă</footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
