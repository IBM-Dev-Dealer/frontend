import Layout from '../components/Layout/Layout';
import '../styles/globals.scss';
import '../components/Layout/Layout.scss';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
