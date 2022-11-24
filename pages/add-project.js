import AddProject from "../components/page-components/AddProject/AddProject";
import { server } from "../config";

const AddProjectPage = (props) => {
  return <AddProject {...props} />;
};

export default AddProjectPage;

export const getStaticProps = async () => {
  const authorization = "authorization";
  const queriedFields = ["technology", "seniorityLevel"];
  const queryParams = `${queriedFields.map((qField) => `fields=${qField}`).join("&")}`;

  const props = await fetch(`${server}/api/getFields?${queryParams}`, {
    method: "GET",
    headers: { authorization },
  }).then((res) => res.json());

  return {
    props,
  };
};
