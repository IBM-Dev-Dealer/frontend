const ProjectsTable = ({ projects }) => {
  console.log("projects", projects);
  const fields = Object.keys(projects[0]);

  return (
    <div className='rounded-lg border shadow-md p-2 overflow-auto flex'>
      {fields.map((field) => (
        <div key={field} id='col' className='w-full'>
          {field}
        </div>
      ))}
    </div>
  );
};

export default ProjectsTable;
