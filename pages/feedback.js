import Feedback from "../components/page-components/Feedback/Feedback";

const FeedbackPage = (props) => {
  return <Feedback {...props} />;
};

export default FeedbackPage;

export const getStaticProps = async () => {
  const loggedUserRole = "project-manager";
  const projectId = "id-of-project";

  const props = { loggedUserRole, projectId };

  if (loggedUserRole === "project-manager") {
    props.devsWhoRequestedFeedback = [
      { label: "Dev Devinson", userId: "dev-devinson" },
      { label: "Lev Tolstoievsky", userId: "lev-tolstoievsky" },
      { label: "Hannah Barbera", userId: "hannah-barbera" },
    ];
  }

  return { props };
};
