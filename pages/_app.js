import { useState } from "react";
import Loader from "../components/atoms/Loader/Loader";
import Layout from "../components/page-components/Layout/Layout";
import { PageColorContextProvider } from "../context/pageColorContext/PageColorContextProvider";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { logged, isPM, error } = pageProps;

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 2000);
  // }, []);

  return (
    <PageColorContextProvider>
      <Layout logged={logged} isPM={isPM} error={error}>
        <Loader loading={isLoading} />
        <Component {...pageProps} />
      </Layout>
    </PageColorContextProvider>
  );
};

export default App;
