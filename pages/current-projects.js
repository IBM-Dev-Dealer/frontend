import CurrentProjects from "../components/page-components/CurrentProjects/CurrentProjects";
import { callAPI } from "../utils/utils";

const CurrentProjectsPage = (props) => <CurrentProjects {...props} />;

export default CurrentProjectsPage;

export const getStaticProps = async () => {
  const currentUserProjectIDs = [15]; // Will throw error if current user is not assigned to any of the project IDs

  // const props = await getClient();

  // ------------------------------------------------------------------------------------------------------

  // const getProjectData = async (projectID) => await callAPI(`/projects/${projectID}`);

  // const solve = async () => {
  //   const projects = [];
  //   currentUserProjectIDs.forEach((project) => {
  //     projects.push(getProjectData(project));
  //   });

  //   console.log("projects", projects);

  //   const res = await Promise.all(projects);

  //   return res.map(async (r) => await r.json());
  //   // console.log("solve res", res);
  //   // return res;
  // };

  // const res = await solve();
  // console.log("res", res);
  // // console.log("res[0].body", res[0].json());

  // ------------------------------------------------------------------------------------------------------

  // const solve = async () => {
  //   const projects = [];
  //   currentUserProjectIDs.map((p) => {
  //     callAPI(`/projects/${p}`)
  //       .then((r) => {
  //         return r.json();
  //       })
  //       .then((a) => {
  //         console.log("a", a);
  //         projects.push(a);
  //         return a;
  //       });
  //   });
  //   return projects;
  // };

  // const prj = await solve();
  // console.log("prj", prj);

  // ------------------------------------------------------------------------------------------------------

  function isArray(what) {
    return Object.prototype.toString.call(what) === "[object Array]";
  }

  const projects = (await (await callAPI("/all_projects")).json()).filter((p) =>
    currentUserProjectIDs.includes(p.id),
  );
  // console.log("projects", projects);
  const projectIDs = projects.map((p) => p.id);

  const developers = (await (await callAPI("/all_users")).json()).filter((u) => {
    const map = projectIDs.map((id) => {
      console.log("u.projectID", u.projectID, typeof JSON.parse(u.projectID));

      if (!u.projectID) return false;

      const projectIDsArray = JSON.parse(u.projectID);

      if (isArray(projectIDsArray)) {
        if (JSON.parse(u.projectID).includes(id)) {
          return true;
        } else return false;
      } else return false;
    });
    if (map.includes(true)) {
      return true;
    } else {
      return false;
    }
  });
  // console.log("developers", developers);

  return {
    props: { projects: projects, developers: developers },
  };
};
