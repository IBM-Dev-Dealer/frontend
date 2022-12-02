import Profile from "../components/page-components/Profile/Profile";
import getProjects from "./api/getProjects";

const ProfilePage = (props) => <Profile {...props} />;

export default ProfilePage;

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: { projects },
  };
};
