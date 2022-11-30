import ColoredItems from "../../atoms/ColoredItems/ColoredItems";

const formatData = (type, data) => {
  switch (type) {
    case "projectDuration":
      return (
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <span className='text-sm text-green font-bold'>Start:</span>{" "}
            <span className='text-md'>{data.start}</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-sm text-green font-bold'>End:</span>{" "}
            <span className='text-md'>{data.end}</span>
          </div>
        </div>
      );
    case "technologies":
      return (
        <div className='w-100'>
          <div className='flex flex-col gap-2'>
            <ColoredItems items={data.map((d) => d.label)} canDelete={false} />
          </div>
        </div>
      );
    default:
      return data.toString();
  }
};

const ProjectsTable = ({ projects, fields: tableFields }) => {
  const fields = Object.keys(tableFields);

  console.log("projects", projects);

  return (
    <table
      align='center'
      className='rounded-2xl border shadow-md overflow-auto flex flex-col w-100 border-collapse table-fixed'
    >
      <tbody>
        <tr key='projectstable-header'>
          {fields.map((field) => (
            <td
              key={field}
              id='col'
              className='hover:bg-tdansparent-gray-05 bg-light-green px-4 py-1 font-bold'
            >
              {tableFields[field].label}
            </td>
          ))}
        </tr>

        {projects.map((project) => (
          <tr
            key={project.projectId}
            className='hover:bg-transparent-gray-05 cursor-pointer border-b'
          >
            {fields.map((field) => (
              <td key={`${project.projectId}_${field}`} className='px-4 py-2'>
                {/* {project[field].toString()} */}
                {formatData(field, project[field])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsTable;
