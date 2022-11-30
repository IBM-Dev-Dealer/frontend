import Title from "../../atoms/Title/Title";
import ProjectsTable from "../../molecules/ProjectsTable/ProjectsTable";

const OtherProjects = ({ projects }) => {
  console.log("projects", projects);
  return (
    <div>
      <Title>Other Projects</Title>
      <ProjectsTable projects={projects} />
    </div>
  );
};

export default OtherProjects;
