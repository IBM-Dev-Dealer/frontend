import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../components/atoms/Loader/Loader";
import Layout from "../components/page-components/Layout/Layout";
import { NotificationContextProvider } from "../context/pageColorContext/providers/NotificationProvider";
import { PageColorContextProvider } from "../context/pageColorContext/providers/PageColorContextProvider";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { events: routerEvents } = useRouter();

  const { logged, isPM, error } = pageProps;

  useEffect(() => {
    routerEvents.on("routeChangeStart", () => setIsLoading(true));
    routerEvents.on("routeChangeComplete", () => setIsLoading(false));
  }, [routerEvents]);

  return (
    <NotificationContextProvider>
      <PageColorContextProvider>
        <Layout logged={logged} isPM={isPM} error={error}>
          <Loader loading={isLoading} />
          <Component {...pageProps} />
        </Layout>
      </PageColorContextProvider>
    </NotificationContextProvider>
  );
};

export default App;
