import Head from "next/head";
import Link from "next/link";
import Error from "../Error/Error";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { ROUTES, colorizeJSXArray, getTitle } from "../../../utils/utils";
import styles from "./Layout.module.scss";
import { usePageColorContext } from "../../../context/pageColorContext/hooks/usePageColorContext";
import { useNotifications } from "../../../context/pageColorContext/hooks/useNotifications";
import Notifications from "../../molecules/Notifications/Notifications";
import LOGO from "../../../public/logo-full-svg.svg";

const Layout = ({ logged = true, isPM = false, error, children }) => {
  const { pathname } = useRouter();
  const title = getTitle(pathname);
  const { pageColorIndexes, setPageColorIndexes } = usePageColorContext();
  const { notifications, removeNotification } = useNotifications();

  const colorizeNavTabs = () => {
    const navLinksColorized = colorizeJSXArray(navLinks);
    const newContext = { ...pageColorIndexes };
    navLinksColorized.forEach((link) => {
      if (!newContext[link.props.href]) {
        newContext[link.props.href] = link.props.className.split("Bg")[1];
      }
    });
    setPageColorIndexes(newContext);
  };

  useEffect(() => {
    colorizeNavTabs();
  }, []);

  const navLinks = useMemo(
    () =>
      logged
        ? [
            <Link href={ROUTES.HOME} key={ROUTES.HOME}>
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
          ],
    [isPM, logged],
  );

  const navLinksColorized = useMemo(() => colorizeJSXArray(navLinks), [navLinks]);

  const colorIndex = Object.keys(pageColorIndexes)
    .map((pgik) => {
      if (pathname.includes(pgik)) {
        return pageColorIndexes[pgik];
      } else return null;
    })
    .filter((c) => c)[0];

  return (
    <>
      <div className='flex h-fit'>
        <Head>
          <title>{title}</title>
        </Head>
        <div className={styles.layout}>
          <header className={styles.header}>
            <div className={styles.logoWrapper}>
              <Image src={LOGO} alt='IBM Dev Dealer' className='h-20 w-auto' />
            </div>
            <nav className={styles.nav}>{navLinksColorized}</nav>
          </header>

          <div className={`${styles.wrapper} mainColorBorder${colorIndex}`}>
            {error ? <Error error={error} /> : <div>{children}</div>}
            <footer className={styles.footer}>© 2022 Decât o echipă</footer>
          </div>
        </div>
      </div>
      <Notifications notifications={notifications} removeNotification={removeNotification} />
    </>
  );
};

export default Layout;
