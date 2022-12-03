/* eslint-disable no-case-declarations */
import { useState } from "react";
import { useNotifications } from "../../../context/hooks/useNotifications";
import { callAPI, colorizeJSXArray } from "../../../utils/utils";
import ColoredItems from "../../atoms/ColoredItems/ColoredItems";
import Modal from "../../atoms/Modal/Modal";
import { PAGE_DESCRIPTION } from "./constants";

const formatData = (type, data) => {
  switch (type) {
    case "projectPeriod":
      const parsedProjectPeriod = JSON.parse(data);
      const startDate = new Date(parsedProjectPeriod.start).toLocaleDateString("RO-ro");
      const endDate = new Date(parsedProjectPeriod.end).toLocaleDateString("RO-ro");

      return (
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <span className='text-sm text-green font-bold'>Start:</span>
            <span className='text-md'>{startDate}</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-sm text-green font-bold'>End:</span>
            <span className='text-md'>{endDate}</span>
          </div>
        </div>
      );
    case "technologies":
      const parsedTechnologies = JSON.parse(data);

      return (
        <div className='flex flex-col gap-2'>
          <ColoredItems
            items={parsedTechnologies.map((d) => d.technology.label).sort()}
            canDelete={false}
          />
        </div>
      );
    case "requiredCapacity":
      const parsedRequiredCapacity = JSON.parse(data);

      return (
        <div className='flex flex-col gap-2'>
          {colorizeJSXArray(
            parsedRequiredCapacity
              .sort((a, b) => ("" + a.technology.label).localeCompare(b.technology.label))
              .map((d, i) => {
                return (
                  <div key={i} className='flex flex-col rounded-md shadow-md p-2 gap-1'>
                    <span className='text-sm self-end'>{d.developers.label}</span>
                    <span className='text-sm self-end'>{d.seniorityLevel.label}</span>
                    <span className='text-sm self-end'>{d.technology.label}</span>
                  </div>
                );
              }),
          )}
        </div>
      );
    default:
      return data.toString();
  }
};

const ProjectsTable = ({ projects, fields: tableFields, developers }) => {
  const fields = Object.keys(tableFields);

  console.log("[ProjectsTable] developers", developers);
  console.log("[ProjectsTable] projects", projects);

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const { notify } = useNotifications();

  const assignDev = async () => {
    console.log("selectedProject", selectedProject);
    const body = {
      projectID: selectedProject.id,
    };
    try {
      const res = await callAPI("/user", body, "PUT");

      if (res.status === 200)
        notify({
          kind: "success",
          id: "devAssignedToProject",
          message: `Developer successfully assigned to project ${selectedProject.projectName}`,
        });
    } catch (error) {
      notify({
        kind: "success",
        id: "devAssignedToProjectError",
        message: `Failed to assign developer to project ${selectedProject.projectName}`,
      });
    }
  };

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
              onClick={() => setSelectedProject(project)}
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
      {selectedProject && (
        <Modal
          onBackdropClick={() => setSelectedProject(null)}
          dropdown={{
            list: developers.map((dev) => ({ ...dev, label: `${dev.firstName} ${dev.lastName}` })),
            select: setSelectedDeveloper,
            selected: selectedDeveloper,
            placeholder: "Select developer",
            infoMessage: "Select developer to assign for this project",
          }}
          button={{ label: "Assign developer to project", onClick: assignDev }}
        />
      )}
    </>
  );
};

export default ProjectsTable;
