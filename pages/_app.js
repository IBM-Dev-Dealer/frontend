import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Loader from "../components/atoms/Loader/Loader";
import Layout from "../components/page-components/Layout/Layout";
import {
  AuthProvider,
  NotificationContextProvider,
  PageColorContextProvider,
} from "../context/providers";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { events: routerEvents } = useRouter();

  const { isPM, error } = pageProps;

  useEffect(() => {
    routerEvents.on("routeChangeStart", () => setIsLoading(true));
    routerEvents.on("routeChangeComplete", () => setIsLoading(false));
  }, [routerEvents]);

  const setLoading = useCallback((val) => setIsLoading(!!val), []);

  return (
    <NotificationContextProvider>
      <AuthProvider>
        <PageColorContextProvider>
          <Layout isPM={isPM} error={error}>
            <Loader loading={isLoading} />
            <Component setLoading={setLoading} {...pageProps} />
          </Layout>
        </PageColorContextProvider>
      </AuthProvider>
    </NotificationContextProvider>
  );
};

export default App;
