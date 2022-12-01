import OtherProjects from "../components/page-components/OtherProjects/OtherProjects";
import { getAllProjects } from "./api/getAllProjects";
import getFields from "./api/getFields";

const OtherProjectsPage = (props) => {
  return <OtherProjects {...props} />;
};

export default OtherProjectsPage;

export const getStaticProps = async () => {
  const queryFields = [
    "client",
    "projectName",
    "projectDuration",
    "technologies",
    "requiredCapacity",
  ];
  const fields = await getFields(queryFields);
  const projects = await getAllProjects();

  return { props: { fields, projects } };
};
