import Head from "next/head";
import Link from "next/link";
import Error from "../Error/Error";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo } from "react";
import { ROUTES, colorizeJSXArray, getTitle } from "../../../utils/utils";
import styles from "./Layout.module.scss";
import { useNotifications, usePageColorContext } from "../../../context/hooks";
import Notifications from "../../molecules/Notifications/Notifications";
import LOGO from "../../../public/logo-full-svg.svg";

const Layout = ({ logged = true, isPM = false, error, children }) => {
  const { pathname } = useRouter();
  const title = getTitle(pathname);
  const { pageColorIndexes, setPageColorIndexes } = usePageColorContext();
  const { notifications, removeNotification } = useNotifications();

  useEffect(() => {}, []);

  // Defined here because the `visible` prop of links will depend on props like `isPM`
  const NAV_LINKS = useMemo(
    () => ({
      logged: [
        // { href: ROUTES.HOME, label: "Home" },
        { href: ROUTES.CURRENT_PROJECT, label: "Current Project" },
        { href: ROUTES.ADD_PROJECT, label: "Add Project" },
        { href: ROUTES.OTHER_PROJECTS, label: "Other Projects" },
        { href: ROUTES.PROFILE, label: "Profile" },
        { href: ROUTES.FEEDBACK, label: "Feedback" },
        { href: ROUTES.LOG, label: "Logout" },
      ],
      notLogged: [
        { href: ROUTES.LOG, label: "Login" },
        { href: ROUTES.REGISTER, label: "Register" },
      ],
    }),
    [],
  );

  const generateNavLinks = useCallback(
    (links) =>
      links
        .map((link) =>
          link.visible !== false ? (
            <Link
              href={link.href}
              key={link.href}
              className={`${pathname.includes(link.href) ? "border-b-8 border-white" : ""}`}
            >
              <span className={`${pathname.includes(link.href) ? "font-bold" : "font-light"}`}>
                {link.label}
              </span>
            </Link>
          ) : null,
        )
        .filter((l) => l),
    [pathname],
  );

  const navLinks = useMemo(
    () => (logged ? generateNavLinks(NAV_LINKS.logged) : generateNavLinks(NAV_LINKS.notLogged)),
    [NAV_LINKS.logged, NAV_LINKS.notLogged, generateNavLinks, logged],
  );

  useEffect(() => {
    const colorizeNavTabs = () => {
      const navLinksColorized = colorizeJSXArray(navLinks);

      setPageColorIndexes((prev) => {
        const newContext = { ...prev };
        navLinksColorized.forEach((link) => {
          if (!newContext[link.props.href]) {
            newContext[link.props.href] = link.props.className.split("Bg")[1];
          }
        });
        return newContext;
      });
    };
    colorizeNavTabs();
  }, [navLinks, setPageColorIndexes]);

  const navLinksColorized = colorizeJSXArray(navLinks);

  const colorIndex = useMemo(
    () =>
      Object.keys(pageColorIndexes)
        .map((pgik) => {
          if (pathname.includes(pgik)) {
            return pageColorIndexes[pgik];
          } else return null;
        })
        .filter((c) => c)[0],
    [pageColorIndexes, pathname],
  );

  return (
    <>
      <div className='flex h-fit'>
        <Head>
          <title>{title}</title>
        </Head>
        <div className={styles.layout}>
          <header className={styles.header}>
            <div className={styles.logoWrapper}>
              <Image src={LOGO} alt='IBM Dev Dealer' className='h-20 w-auto' priority />
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

export default React.memo(Layout);
