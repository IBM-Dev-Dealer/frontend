import OtherProjects from "../components/page-components/OtherProjects/OtherProjects";
import { getAllProjects } from "./api/getAllProjects";

const OtherProjectsPage = (props) => {
  return <OtherProjects {...props} />;
};

export default OtherProjectsPage;

export const getStaticProps = async () => {
  const props = await getAllProjects();

  return { props };
};
