import GiveFeedback from "../../components/page-components/GiveFeedback/GiveFeedback";
import { callAPI } from "../../utils/utils";
import getDevData from "../api/getDevData";
import getFields from "../api/getFields";

const GiveFeedbackPage = (props) => {
  return <GiveFeedback {...props} />;
};

export default GiveFeedbackPage;

export const getStaticProps = async () => {
  // const authorization = "authorization";

  const loggedUserRoles = ["project-manager", "dev"];
  const projectID = "1";

  // const devData = await fetch(`${process.env.API_URL}/api/getDevData`, {
  //   method: "GET",
  //   headers: { authorization },
  // }).then((res) => res.json());

  const devData = await getDevData();

  const queriedFields = Object.keys(devData.devData.techSeniority[0]);

  // const queryParams = `${queriedFields.map((qField) => `fields=${qField}`).join("&")}`;

  // const fields = await fetch(`${process.env.API_URL}/api/getFields?${queryParams}`, {
  //   method: "GET",
  //   headers: { authorization },
  // }).then((res) => res.json());

  const fields = await getFields(queriedFields);

  const props = { loggedUserRoles, projectID, ...devData, newSeniorityLevelFields: fields.fields };

  const allDevs = await (await callAPI("/all_users")).json();
  const devsOfPmProject = allDevs
    .filter((dev) => dev.projectID === projectID)
    .map((dev) => ({ ...dev, label: `${dev.firstName} ${dev.lastName}` }));

  if (loggedUserRoles.includes("project-manager")) {
    props.devsWhoRequestedFeedback = devsOfPmProject;
  }
  return { props };
};
