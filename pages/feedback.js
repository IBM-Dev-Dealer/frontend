import Feedback from "../components/page-components/Feedback/Feedback";

const FeedbackPage = (props) => {
  return <Feedback {...props} />;
};

export default FeedbackPage;

export const getStaticProps = async () => {
  const loggedUserRole = "project-manager";
  const projectId = "id-of-project";

  return { props: { loggedUserRole, projectId } };
};
