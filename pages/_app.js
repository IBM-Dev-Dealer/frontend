import { useState, useEffect } from "react";
import Loader from "../components/atoms/Loader/Loader";
import Layout from "../components/page-components/Layout/Layout";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { logged, isPM, error } = pageProps;

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <Layout logged={logged} isPM={isPM} error={error}>
      <Loader loading={isLoading} />
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
