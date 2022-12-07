import { useEffect, useState } from "react";
import GiveFeedback from "../../components/page-components/GiveFeedback/GiveFeedback";
import { useAuth } from "../../context/hooks/useAuth";
import { callAPI, isArray } from "../../utils/utils";
import { getFields } from "../api/getFields";
// import getDevData from "../api/getDevData";

const getProjects = async (projectIDs) => {
  const projects = projectIDs.map((p) => callAPI(`/projects/${p}`).then((r) => r.json()));
  return Promise.all(projects);
};

const GiveFeedbackPage = (props) => {
  const [projects, setProjects] = useState([]);

  const { loggedUserEmail } = useAuth();

  useEffect(() => {
    const fetchProjects = async () => {
      const user = await callAPI(`/user/${loggedUserEmail}`);

      if (user.status !== 200) {
        setProjects([]);
      }
      const currentUserProjectIDs = JSON.parse((await user.json()).projectID);
      const fetchedProjects = await getProjects(currentUserProjectIDs);
      setProjects(fetchedProjects);
    };
    if (loggedUserEmail) fetchProjects();
  }, [loggedUserEmail]);

  return <GiveFeedback {...props} projects={projects} />;
};

export default GiveFeedbackPage;

export const getStaticProps = async () => {
  // const authorization = "authorization";

  const loggedUserRoles = ["project-manager", "dev"];
  const fields = await getFields(["technology", "seniorityLevel"]); // TODO: replace with getFieldsContents inside GiveFeedback component

  const props = { loggedUserRoles, newSeniorityLevelFields: fields.fields };

  return { props, revalidate: 1 };
};
