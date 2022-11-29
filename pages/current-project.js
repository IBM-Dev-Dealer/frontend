import CurrentProject from "../components/page-components/CurrentProject/CurrentProject";

const CurrentProjectPage = (props) => <CurrentProject {...props} />;

export default CurrentProjectPage;

export const getStaticProps = async () => {
  const authorization = "authorization";
  const props = await fetch(`${process.env.HOST}/api/currentProject`, {
    method: "GET",
    headers: { authorization },
  }).then((res) => res.json());

  return {
    props,
  };
};
