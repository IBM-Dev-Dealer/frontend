import CurrentProject from "../components/page-components/CurrentProject/CurrentProject";
import { server } from "../config";

const CurrentProjectPage = (props) => <CurrentProject {...props} />;

export default CurrentProjectPage;

export const getStaticProps = async () => {
  const authorization = "authorization";
  const props = await fetch(`${server}/api/currentProject`, {
    method: "GET",
    headers: { authorization },
  }).then((res) => res.json());

  return {
    props,
  };
};
