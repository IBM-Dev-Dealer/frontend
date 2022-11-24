import Title from "../../atoms/Title/Title";
import Client from "./Client/Client";

const CurrentProject = ({ client }) => {
  return (
    <div>
      <Title>Current Project</Title>
      <Client {...client} />
    </div>
  );
};

export default CurrentProject;
