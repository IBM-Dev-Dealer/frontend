import { useEffect, useState } from "react";
import CurrentProjects from "../components/page-components/CurrentProjects/CurrentProjects";
import { useAuth } from "../context/hooks/useAuth";
import { callAPI, isArray } from "../utils/utils";

const CurrentProjectsPage = () => {
  const { loggedUserEmail } = useAuth();

  const [props, setProps] = useState({ projects: [] });

  useEffect(() => {
    const getProjects = async () => {
      const user = await callAPI(`/user/${loggedUserEmail}`);
      console.log("[CurrentProjectsPage] user", user);

      if (user.status !== 200) {
        setProps({ projects: [] });
      }
      const currentUserProjectIDs = JSON.parse((await user.json()).projectID);
      console.log("[CurrentProjectsPage] currentUserProjectIDs", currentUserProjectIDs);

      const projects = (await (await callAPI("/all_projects")).json()).filter(
        (p) => currentUserProjectIDs && currentUserProjectIDs.includes(p.id),
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
      setProps({ projects: projectsWithDevs });

      console.log("[CurrentProjectsPage] projectsWithDevs", projectsWithDevs);
    };
    if (loggedUserEmail) getProjects();
  }, [loggedUserEmail]);

  return <CurrentProjects {...props} />;
};

export default CurrentProjectsPage;
