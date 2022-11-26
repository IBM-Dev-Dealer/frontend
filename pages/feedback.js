import Feedback from "../components/page-components/Feedback/Feedback";
import { server } from "../config/index";

const FeedbackPage = (props) => {
  return <Feedback {...props} />;
};

export default FeedbackPage;

export const getStaticProps = async () => {
  const authorization = "authorization";

  const loggedUserRoles = ["project-manager", "dev"];
  const projectId = "id-of-project";

  const devData = await fetch(`${server}/api/getDevData`, {
    method: "GET",
    headers: { authorization },
  }).then((res) => res.json());

  const queriedFields = Object.keys(devData.devData.techSeniority[0]);

  const queryParams = `${queriedFields.map((qField) => `fields=${qField}`).join("&")}`;

  const fields = await fetch(`${server}/api/getFields?${queryParams}`, {
    method: "GET",
    headers: { authorization },
  }).then((res) => res.json());

  const props = { loggedUserRoles, projectId, ...devData, newSeniorityLevelFields: fields.fields };

  if (loggedUserRoles.includes("project-manager")) {
    props.devsWhoRequestedFeedback = [
      { label: "Dev Devinson", userId: "dev-devinson" },
      { label: "Lev Tolstoievsky", userId: "lev-tolstoievsky" },
      { label: "Hannah Barbera", userId: "hannah-barbera" },
    ];
  }

  return { props };
};
