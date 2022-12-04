import CurrentProjects from "../components/page-components/CurrentProjects/CurrentProjects";
import { callAPI, isArray } from "../utils/utils";

const CurrentProjectsPage = (props) => <CurrentProjects {...props} />;

export default CurrentProjectsPage;

export const getStaticProps = async () => {
  const currentUserProjectIDs = [1, 2]; // Will throw error if current user is not assigned to any of the project IDs

  const projects = (await (await callAPI("/all_projects")).json()).filter((p) =>
    currentUserProjectIDs.includes(p.id),
  );

  const getProjectsWithDevs = async () => {
    const projectsWithDevs = projects.map(async (p) => {
      const developers = (await (await callAPI("/all_users")).json()).filter((d) => {
        let contains = false;
        if (!d.projectID) return false;
        const devProjectIDs = JSON.parse(d.projectID);
        if (isArray(devProjectIDs)) {
          if (devProjectIDs.includes(p.id)) contains = true;
        }
        return contains;
      });

      return { ...p, developers: developers };
    });
    return Promise.all(projectsWithDevs);
  };

  const projectsWithDevs = await getProjectsWithDevs();

  return {
    props: { projects: projectsWithDevs },
  };
};
