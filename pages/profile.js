import Profile from "../components/page-components/Profile/Profile";
import { callAPI } from "../utils/utils";
import getProjects from "./api/getProjects";

const ProfilePage = (props) => <Profile {...props} />;

export default ProfilePage;

export const getStaticProps = async () => {
  // const projects = await getProjects();

  const loggedUserID = 1;

  const userFeedback = (await (await callAPI(`/user_feedback/${loggedUserID}`)).json()).map(
    (p) => ({ ...p, label: p.projectName }),
  );

  console.log("userFeedback", userFeedback);

  return {
    props: { projects: userFeedback },
  };
};
