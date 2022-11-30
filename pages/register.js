import Register from "../components/page-components/Log/Register";
import getFields from "./api/getFields";

const RegisterPage = (props) => {
  return <Register {...props} />;
};
export default RegisterPage;

export const getStaticProps = async () => {
  const queriedFields = ["technology", "seniorityLevel"];
  const props = await getFields(queriedFields);

  return {
    props,
  };
};
