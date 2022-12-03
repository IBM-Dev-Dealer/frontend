import Title from "../../atoms/Title/Title";
import ProjectsTable from "../../molecules/ProjectsTable/ProjectsTable";

const OtherProjects = ({ projects, fields, developers }) => {
  return (
    <div>
      <Title>Other Projects</Title>
      <ProjectsTable projects={projects} fields={fields.fields} developers={developers} />
    </div>
  );
};

export default OtherProjects;
