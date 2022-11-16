import Layout from '../components/page-components/Layout/Layout';
import '../styles/globals.scss';

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
