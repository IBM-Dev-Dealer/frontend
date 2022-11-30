const ProjectsTable = ({ projects, fields: tableFields }) => {
  const fields = Object.keys(tableFields);
  console.log("projects", projects);

  return (
    <div className='rounded-lg border shadow-md p-2 overflow-auto flex'>
      {fields.map((field) => (
        <div key={field} id='col' className='w-full'>
          <div>{tableFields[field].label}</div>
          <div>
            {projects.map((project) => {
              console.log(project);
              return <div key={project.projectId}>{project.projectId}</div>;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsTable;
