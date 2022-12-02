import { useState } from "react";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import StarRating from "../../atoms/StarRating/StarRating";

const Profile = ({ projects }) => {
  const [project, setProject] = useState();
  const projectsNames = projects.map(({ title }) => ({ label: title }));

  const getProject = (projectName) => projects.find((p) => p.title === projectName);

  return (
    <div>
      <div className='flex w-96 items-center'>
        <div className='w-60 text-xl'>Feedback on:</div>
        <Dropdown
          name='innovation'
          list={projectsNames}
          placeholder={project?.title || "Select project"}
          select={(projectNameSelected) => setProject(getProject(projectNameSelected.label))}
          infoMessage='View your feedback on a specific project.'
        />
      </div>
      {project && (
        <div
          className={`flex relative mt-5 flex-col p-10 text-white rounded-xl bg-cover bg-[url(https://img.freepik.com/free-photo/beautiful-colorful-background-congratulate-birthday_24972-1489.jpg?w=1380&t=st=1670013716~exp=1670014316~hmac=2a94996e7d532ab948aac33514b628cc26e0906d91a92cc36dc2f075524add0d)]`}
        >
          <div className='flex items-center'>
            <div className='mr-2 text-sm'>Business Results:</div>
            {project.businessResults}
          </div>
          <div className='flex items-center'>
            <div className='mr-2 text-sm'>Client Success:</div>
            {project.clientSuccess}
          </div>
          <div className='flex items-center'>
            <div className='mr-2 text-sm'>Innovation:</div>
            {project.innovation}
          </div>
          <div className='flex items-center'>
            <div className='mr-3 text-sm'>Team Interaction:</div>
            <StarRating rating={project.teamInteraction} disabled />
          </div>
          <div className='flex flex-col'>
            <div className='mr-3 text-sm'>Levels per technology:</div>
            {project.techSeniority.map(({ technology, seniorityLevel }, i) => (
              <div className='ml-3' key={i}>
                {technology.label} - {seniorityLevel.label}
              </div>
            ))}
          </div>
          {project.feedbackMessage && (
            <div className='p-3 mt-5 text-center rounded-xl w-72 bg-gradient-to-t from-green to-orangeade self-end'>
              {project.feedbackMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
