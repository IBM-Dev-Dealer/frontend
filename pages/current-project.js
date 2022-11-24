import CurrentProject from "../components/page-components/CurrentProject/CurrentProject";

const CurrentProjectPage = (props) => <CurrentProject {...props} />;

export default CurrentProjectPage;

export const getStaticProps = async () => {
  const authorization = "authorizationa";
  const props = await fetch("http://localhost:3000/api/currentProject", {
    method: "GET",
    headers: { authorization },
  }).then((res) => res.json());

  return {
    props,
  };
};
