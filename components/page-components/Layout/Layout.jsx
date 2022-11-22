import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ROUTES, colorizeJSXArray, getTitle } from '../../../utils/utils';

import styles from './Layout.module.scss';

const Layout = ({ logged = false, isPM = false, children }) => {
  const { pathname } = useRouter();
  const title = getTitle(pathname);

  const navLinks = [
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
    <Link href={ROUTES.SOURCE} key={ROUTES.SOURCE}>
      Source
    </Link>,
    logged ? (
      <Link href={ROUTES.PROFILE} key={ROUTES.PROFILE}>
        Profile
      </Link>
    ) : null,
    isPM ? (
      <Link href={ROUTES.MANAGE_EMPLOYEES} key={ROUTES.MANAGE_EMPLOYEES}>
        Manage Employees
      </Link>
    ) : null,
    <Link href={ROUTES.LOG} key={ROUTES.LOG}>
      {logged ? 'Logout' : 'Login/Register'}
    </Link>,
  ];

  const navLinksColorized = colorizeJSXArray(navLinks);
  const selectedLink = navLinksColorized.find((link) => link.props.href === pathname);
  const colorIndex = selectedLink.props.className.split('Bg')[1];

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.logoWrapper}>IBM Dev Dealer</div>
          <nav className={styles.nav}>{navLinksColorized}</nav>
        </header>

        <div className={`${styles.wrapper} mainColorBorder${colorIndex}`}>
          <div className={styles.content}>{children}</div>
          <footer className={styles.footer}>© 2022 Decât o echipă</footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
