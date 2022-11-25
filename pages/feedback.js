import Feedback from "../components/page-components/Feedback/Feedback";
import { server } from "../config/index";

const FeedbackPage = (props) => {
  return <Feedback {...props} />;
};

export default FeedbackPage;

export const getStaticProps = async () => {
  const authorization = "authorization";

  const loggedUserRole = "project-manager";
  const projectId = "id-of-project";

  const devData = await fetch(`${server}/api/getDevData`, {
    method: "GET",
    headers: { authorization },
  }).then((res) => res.json());

  const props = { loggedUserRole, projectId, devData };

  if (loggedUserRole === "project-manager") {
    props.devsWhoRequestedFeedback = [
      { label: "Dev Devinson", userId: "dev-devinson" },
      { label: "Lev Tolstoievsky", userId: "lev-tolstoievsky" },
      { label: "Hannah Barbera", userId: "hannah-barbera" },
    ];
  }

  return { props };
};
