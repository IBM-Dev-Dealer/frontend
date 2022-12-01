import { colorizeJSXArray } from "../../../utils/utils";
import ColoredItems from "../../atoms/ColoredItems/ColoredItems";
import { PAGE_DESCRIPTION } from "./constants";

const formatData = (type, data) => {
  switch (type) {
    case "projectDuration":
      return (
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <span className='text-sm text-green font-bold'>Start:</span>
            <span className='text-md'>{data.start}</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-sm text-green font-bold'>End:</span>
            <span className='text-md'>{data.end}</span>
          </div>
        </div>
      );
    case "technologies":
      return (
        <div className='flex flex-col gap-2'>
          <ColoredItems items={data.map((d) => d.label)} canDelete={false} />
        </div>
      );
    case "requiredCapacity":
      return (
        <div className='flex flex-col gap-2'>
          {colorizeJSXArray(
            data.map((d, i) => (
              <div key={i} className='flex flex-col rounded-md shadow-md p-2 gap-1'>
                {/* <span className='text-xs font-bold'>Developers:</span> */}
                <span className='text-sm self-end'>{d.developers}</span>
                {/* <span className='text-xs font-bold'>Seniority:</span> */}
                <span className='text-sm self-end'>{d.seniority.label}</span>
                {/* <span className='text-xs font-bold'>Technology:</span> */}
                <span className='text-sm self-end'>{d.technology.label}</span>
              </div>
            )),
          )}
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
    <>
      <div className='mb-12 text-md text-transparent-gray-50 max-w-2xl text-justify m-auto'>
        {PAGE_DESCRIPTION}
      </div>
      <table align='center' className='overflow-scroll border-collapse table-fixed'>
        <tbody>
          <tr key='projectstable-header'>
            {fields.map((field) => (
              <td key={field} id='col' className='bg-light-green px-4 py-1 font-bold'>
                {tableFields[field].label}
              </td>
            ))}
          </tr>

          {projects.map((project) => (
            <tr
              key={project.projectId}
              className='hover:bg-transparent-gray-05 hover:shadow-md cursor-pointer border border-x-transparent'
            >
              {fields.map((field) => (
                <td key={`${project.projectId}_${field}`} className='px-4 py-2'>
                  {formatData(field, project[field])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProjectsTable;
