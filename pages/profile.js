import Profile from "../components/page-components/Profile/Profile";
import { callAPI } from "../utils/utils";

const ProfilePage = (props) => <Profile {...props} />;

export default ProfilePage;

export const getStaticProps = async () => {
  const loggedUserID = 1;

  const userFeedback = (await (await callAPI(`/user_feedback/${loggedUserID}`)).json()).map(
    (p) => ({ ...p, label: p.projectName }),
  );

  // console.log("userFeedback", userFeedback);

  return {
    props: { projects: userFeedback },
  };
};
