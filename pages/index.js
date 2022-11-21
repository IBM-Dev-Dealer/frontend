import Home from '../components/page-components/Home/Home';
import PickDate from '../components/atoms/PickDate/PickDate';
import Loader from '../components/atoms/Loader/Loader';

const HomePage = () => {
  return (
    <>
      <Home />
      <PickDate />
      <Loader />
    </>
  );
};

export default HomePage;
