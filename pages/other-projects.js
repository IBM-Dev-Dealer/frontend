import OtherProjects from "../components/page-components/OtherProjects/OtherProjects";
import { callAPI } from "../utils/utils";
import getFields from "./api/getFields";
import { getAllProjects } from "./api/getAllProjects";

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
  const projects2 = await getAllProjects();
  const projects = await (await callAPI("/all_projects", null, "GET")).json();

  console.log("projects", JSON.stringify(projects));

  return { props: { fields, projects: projects2 } };
};
