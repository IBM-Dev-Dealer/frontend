import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

  return (
    <NotificationContextProvider>
      <AuthProvider>
        <PageColorContextProvider>
          <Layout isPM={isPM} error={error}>
            <Loader loading={isLoading} />
            <Component {...pageProps} />
          </Layout>
        </PageColorContextProvider>
      </AuthProvider>
    </NotificationContextProvider>
  );
};

export default App;
