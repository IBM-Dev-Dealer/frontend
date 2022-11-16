import Login from '../components/Log/Login';

const LogPage = ({ isLogged = true, logout = () => {} }) => {
  return isLogged ? <Login /> : logout();
};

export default LogPage;
