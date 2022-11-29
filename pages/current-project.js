import CurrentProject from "../components/page-components/CurrentProject/CurrentProject";
import getClient from "./api/currentProject";

const CurrentProjectPage = (props) => <CurrentProject {...props} />;

export default CurrentProjectPage;

export const getStaticProps = async () => {
  // const authorization = "authorization";
  // const props = await fetch(`${process.env.API_URL}/api/currentProject`, {
  //   method: "GET",
  //   headers: { authorization },
  // }).then((res) => res.json());

  const props = await getClient();

  return {
    props,
  };
};
