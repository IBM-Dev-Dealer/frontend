import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Layout = ({ title = 'Welcome', logged = false, children }) => {
  const layoutClass = 'layout';
  const defaultPage = '/';
  const currentProject = '/current-project';
  const otherProjects = '/other-projects';
  const source = '/source';
  const log = '/log';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={layoutClass}>
        <nav>
          <Link href={defaultPage}>HOME</Link>
          <Link href={currentProject}>CURRENT PROJECT</Link>
          <Link href={otherProjects}>OTHER PROJECTS</Link>
          <Link href={source}>SOURCE</Link>
          <Link href={log}>{logged ? 'LOGOUT' : 'LOGIN'}</Link>
        </nav>
        <div>{children}</div>
        <footer>Copy rights AMAZING TEAM DEV DEALER</footer>
      </div>
    </>
  );
};

export default Layout;
