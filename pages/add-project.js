import AddProject from "../components/page-components/AddProject/AddProject";
import { getFields } from "./api/getFields";

const AddProjectPage = (props) => {
  return <AddProject {...props} />;
};

export default AddProjectPage;

export const getStaticProps = async () => {
  // const authorization = "authorization";
  const queriedFields = ["technology", "seniorityLevel"];

  const props = await getFields(queriedFields);

  return {
    props,
    revalidate: 1,
  };
};
