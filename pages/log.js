import Login from "../components/page-components/Log/Login";
const LogPage = ({ logged, logout = () => {} }) => {
  return logged ? logout() : <Login />;
};

export default LogPage;
