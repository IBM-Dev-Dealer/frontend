import RequestFeedback from "../../components/page-components/RequestFeedback/RequestFeedback";
import getProjectsWithoutFeedback from "../api/getProjectsWithoutFeedback";

const RequestFeedbackPage = (props) => {
  return <RequestFeedback {...props} />;
};

export default RequestFeedbackPage;

export const getStaticProps = async () => {
  // const authorization = "authorization";

  const loggedUserRoles = ["project-manager", "dev"];

  // const projects = await fetch(`${process.env.API_URL}/api/getProjectsWithoutFeedback`, {
  //   method: "GET",
  //   headers: { authorization },
  // }).then((res) => res.json());

  const projects = getProjectsWithoutFeedback();

  const props = { loggedUserRoles, ...projects };

  return { props, revalidate: 1 };
};
