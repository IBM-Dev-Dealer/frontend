import OtherProjects from "../components/page-components/OtherProjects/OtherProjects";
import { callAPI } from "../utils/utils";
import getFields from "./api/getFields";

const OtherProjectsPage = (props) => {
  return <OtherProjects {...props} />;
};

export default OtherProjectsPage;

export const getStaticProps = async () => {
  const queryFields = [
    "client",
    "projectName",
    "projectPeriod",
    "technologies",
    "requiredCapacity",
  ];
  const fields = await getFields(queryFields);
  // const projects2 = await getAllProjects();
  const projects = await (await callAPI("/all_projects", null, "GET")).json();
  const developers = await (await callAPI("/all_users", null, "GET")).json();

  // console.log("developers", developers);
  // console.log("projects", projects);

  return { props: { fields, projects, developers } };
};
