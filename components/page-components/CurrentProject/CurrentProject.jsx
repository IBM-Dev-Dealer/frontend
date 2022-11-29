import Client from "./Client/Client";

const CurrentProject = ({ client }) => {
  return (
    <div>
      <Client {...client} />
    </div>
  );
};

export default CurrentProject;
