import GiveFeedback from "../../components/page-components/GiveFeedback/GiveFeedback";
import { callAPI, isArray } from "../../utils/utils";
import { getFields } from "../api/getFields";
// import getDevData from "../api/getDevData";

const GiveFeedbackPage = (props) => {
  return <GiveFeedback {...props} />;
};

export default GiveFeedbackPage;

export const getStaticProps = async () => {
  // const authorization = "authorization";

  const loggedUserRoles = ["project-manager", "dev"];
  const projectIDs = [15];

  const getProjects = async () => {
    const projects = projectIDs.map((p) => callAPI(`/projects/${p}`).then((r) => r.json()));
    return Promise.all(projects);
  };

  const projects = await getProjects();
  // console.log("projects", projects);

  const fields = await getFields(["technology", "seniorityLevel"]); // TODO: replace with getFieldsContents inside GiveFeedback component

  const props = { loggedUserRoles, projects, newSeniorityLevelFields: fields.fields };

  return { props };
};
