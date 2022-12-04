import GiveFeedback from "../../components/page-components/GiveFeedback/GiveFeedback";
import { callAPI, isArray } from "../../utils/utils";
// import getDevData from "../api/getDevData";
// import getFields from "../api/getFields";

const GiveFeedbackPage = (props) => {
  return <GiveFeedback {...props} />;
};

export default GiveFeedbackPage;

export const getStaticProps = async () => {
  // const authorization = "authorization";

  const loggedUserRoles = ["project-manager", "dev"];
  // const projectID = "15";

  // const devData = await fetch(`${process.env.API_URL}/api/getDevData`, {
  //   method: "GET",
  //   headers: { authorization },
  // }).then((res) => res.json());

  // const devData = await getDevData();

  // const queriedFields = Object.keys(devData.devData.techSeniority[0]);

  // const queryParams = `${queriedFields.map((qField) => `fields=${qField}`).join("&")}`;

  // const fields = await fetch(`${process.env.API_URL}/api/getFields?${queryParams}`, {
  //   method: "GET",
  //   headers: { authorization },
  // }).then((res) => res.json());

  // const fields = await getFields(queriedFields);

  // const props = { loggedUserRoles, projectID, ...devData, newSeniorityLevelFields: fields.fields };

  // const allDevs = await (await callAPI("/all_users")).json();
  // const devsOfPmProject = allDevs
  //   .filter((dev) => dev.projectID === projectID)
  //   .map((dev) => ({ ...dev, label: `${dev.firstName} ${dev.lastName}` }));

  // const pmProject = await (await callAPI(`/projects/${projectID}`, null, "GET")).json();

  // console.log("pmProject", pmProject);

  // if (loggedUserRoles.includes("project-manager")) {
  //   props.devsWhoRequestedFeedback = devsOfPmProject;
  //   props.projects = [pmProject];
  // }

  // const res = [];
  // [15, 17].forEach((id) => {
  //   res.push(callAPI(`/projects/${id}`).then((response) => response.json()));
  // });

  // Promise.all(res).then((responses) => {
  //   // responses is an array of JSON responses
  //   console.log("Promise responses", responses);
  //   return responses;
  // });

  // ---------------------------------------------------------------------------------------------

  const projectIDs = [15];

  const getProjects = async () => {
    const projects = projectIDs.map((p) => callAPI(`/projects/${p}`).then((r) => r.json()));
    return Promise.all(projects);
  };

  const projects = await getProjects();
  console.log("projects", projects);

  const allDevs = await (await callAPI("/all_users")).json();

  // const devsOfPmProject = allDevs
  //   .filter((dev) => {
  //     if (!dev.projectID) return false;
  //     const devProjectIDs = JSON.parse(dev.projectID);
  //     let contains = false;

  //     if (isArray(devProjectIDs)) {
  //       devProjectIDs.forEach((id) => {
  //         if (projectIDs.includes(id)) contains = true;
  //       });
  //     }
  //     return contains;
  //   })
  //   .map((dev) => ({ ...dev, label: `${dev.firstName} ${dev.lastName}` }));

  // console.log("allDevs", allDevs);
  // console.log("devsOfPmProject", devsOfPmProject);

  // const devData = await getDevData();

  // const queriedFields = Object.keys(devData.devData.techSeniority[0]);

  // const queryParams = `${queriedFields.map((qField) => `fields=${qField}`).join("&")}`;

  // const fields = await fetch(`${process.env.API_URL}/api/getFields?${queryParams}`, {
  //   method: "GET",
  //   headers: { authorization },
  // }).then((res) => res.json());

  // const fields = await getFields(queriedFields);

  // const fields = await callAPI("/getFields")

  // const props = { loggedUserRoles, ...devData, newSeniorityLevelFields: fields.fields };
  const props = { loggedUserRoles, projects };

  return { props };
};
