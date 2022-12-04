import { useState } from "react";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import StarRating from "../../atoms/StarRating/StarRating";
import Title from "../../atoms/Title/Title";
import BgImage from "../../../public/feedback_background.svg";
import Image from "next/image";
import UnorderedList from "../../atoms/UnorderedList/UnorderedList";

const Profile = ({ projects }) => {
  const [project, setProject] = useState();

  return (
    <>
      <Title>Profile</Title>
      <div className='flex flex-col items-center'>
        <div className='max-w-lg'>
          <Image
            src={BgImage}
            alt=''
            className=' opacity-5 absolute top-28 w-2/3 bottom-0 left-0 right-0 m-auto overflow-hidden'
          />

          <div className='flex w-96'>
            <Dropdown
              name='innovation'
              list={projects}
              placeholder={"Select project"}
              selected={project}
              select={(projectNameSelected) => setProject(projectNameSelected)}
              infoMessage='View the feedback you received from the Project Managers of the projects you have been enrolled in.'
            />
          </div>
          {project && (
            <>
              <div
                className={`flex relative mt-5 flex-col max-w-lg text-black rounded-xl bg-cover gap-2`}
              >
                <div className='flex items-end'>
                  <div className='mr-2 text-sm font-bold'>Business Results:</div>
                  <span className='mr-2 text-sm font-light'>{project.businessResults}</span>
                </div>
                <div className='flex items-end'>
                  <div className='mr-2 text-sm font-bold'>Client Success:</div>
                  <span className='mr-2 text-sm font-light'>{project.clientSuccess}</span>
                </div>
                <div className='flex items-end'>
                  <div className='mr-2 text-sm font-bold'>Innovation:</div>
                  <span className='mr-2 text-sm font-light'>{project.innovation}</span>
                </div>
                <div className='flex items-center'>
                  <div className='mr-3 text-sm font-bold'>Team Interaction:</div>
                  <StarRating rating={project.teamInteraction} disabled />
                </div>
                <UnorderedList
                  label={"Suggested Seniority:"}
                  list={JSON.parse(project.suggestedSeniorityLevels)}
                  classNames={{ label: "text-sm font-bold" }}
                />
                {project.additionalFeedback && (
                  <div className='p-3 mt-5 text-center rounded-xl w-72 bg-mustard self-end shadow-lg'>
                    {project.additionalFeedback}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
