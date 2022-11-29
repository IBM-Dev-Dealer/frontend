import RequestFeedback from "../../components/page-components/RequestFeedback/RequestFeedback";
import { server } from "../../config";

const RequestFeedbackPage = (props) => {
  return <RequestFeedback {...props} />;
};

export default RequestFeedbackPage;

export const getStaticProps = async () => {
  const authorization = "authorization";

  const loggedUserRoles = ["project-manager", "dev"];

  const projects = await fetch(`${server}/api/getProjectsWithoutFeedback`, {
    method: "GET",
    headers: { authorization },
  }).then((res) => res.json());

  const props = { loggedUserRoles, ...projects };

  return { props };
};
