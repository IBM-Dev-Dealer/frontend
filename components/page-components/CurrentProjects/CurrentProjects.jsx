import Client from "./components/Client";
import CardList from "../../molecules/CardList/CardList";
import Link from "next/link";
import Button from "../../atoms/Button/Button";
import { PlusIcon } from "@heroicons/react/20/solid";
import Title from "../../atoms/Title/Title";
import { ROUTES } from "../../../utils/utils";

const formatDate = (date, moment) => new Date(JSON.parse(date)[moment]);
const formatTechnologies = (technologies) => JSON.parse(technologies).map((t) => t.technology);
const formatRepos = (repositories) => JSON.parse(repositories).map((r) => ({ label: r }));
const formatDevelopers = (devs) =>
  devs.map((dev) => ({
    ...dev,
    label: `${dev.firstName} ${dev.lastName}`,
    techSeniority: JSON.parse(dev.techStacks),
  }));

const CurrentProjects = ({ projects }) => {
  const borderTopClass = "m-5 p-5 border-t border-";

  // console.log("projects", projects);
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        <Title>Current Projects</Title>
        <Link
          className='flex h-min p-3 rounded-xl shadow-md hover:bg-light-green'
          href={ROUTES.ADD_PROJECT}
        >
          <PlusIcon className='w-6 h-6' />
          <div className='max-md:hidden'> add project</div>
        </Link>
      </div>
      {projects &&
        projects.map((project, i) => {
          return (
            // <div key={i} className={`${i !== 0 ? "border-t-4 border-dotted pt-10" : ""}`}>
            <div key={i} className={`border-t-4 border-dotted pt-10`}>
              <Client
                name={project.client}
                project={project.projectName}
                startDate={formatDate(project.projectPeriod, "start")}
                endDate={formatDate(project.projectPeriod, "end")}
                // startDate={JSON.parse(project.projectPeriod).start}
                // endDate={JSON.parse(project.projectPeriod).end}
              />
              <div className={`${borderTopClass}light-green`}>
                <p className='text-xl text-light-green'>Technologies:</p>
                <CardList
                  list={formatTechnologies(project.technologies)}
                  titleColor='light-green'
                  // subListName='level'
                  // addSubList='Add seniority level'
                  addToList
                >
                  {({ type, dev }) => (
                    <div className='flex justify-between' key={`${type}_${dev}`}>
                      <div className='text-sm'>{type}</div>
                      <div className='text-sm'>{dev}</div>
                    </div>
                  )}
                </CardList>
              </div>
              <div className={`${borderTopClass}blue`}>
                <p className='text-xl text-blue'>Developers:</p>
                <CardList
                  list={formatDevelopers(project.developers)}
                  titleColor='blue'
                  subListName='techSeniority'
                  addSubList='Add technology'
                  addToList
                  listWidth={32}
                >
                  {({ technology, seniorityLevel }) => (
                    <div className='text-sm' key={`${technology.label}_${seniorityLevel.label}`}>
                      {technology.label} / {seniorityLevel.label}
                    </div>
                  )}
                </CardList>
              </div>
              <div className={`flex justify-between flex-wrap ${borderTopClass}orangeade`}>
                <div className='flex flex-col gap-2'>
                  <p className='text-xl text-orangeade'>Repositories:</p>
                  <CardList
                    list={formatRepos(project.repositories)}
                    titleColor='orangeade'
                    // subListName='zone'
                    addSubList='Add zone'
                    addToList
                    listWidth={36}
                  >
                    {(z) => (
                      <p key={z} className='hover:text-mustard'>
                        {z}
                      </p>
                    )}
                  </CardList>
                  <p className='text-xl text-orangeade'>Slack Channels:</p>
                  <div className='text-sm flex flex-wrap items-center gap-3'>
                    {JSON.parse(project.slackChannels).map((slack) => (
                      <Link
                        key={slack}
                        className='rounded-xl bg-mustard hover:bg-orangeade px-4 py-2 shadow-md'
                        href={slack}
                      >
                        {slack}
                      </Link>
                    ))}
                    <Button
                      label={<PlusIcon className='w-6 h-6' />}
                      type='button'
                      isSquare={true}
                    />
                  </div>
                </div>
                {/* <div>
                <p className='text-xl text-orangeade'>Tutorials:</p>
                <div className='text-sm'>
                  {tutorials.map(({ link, title }) => (
                    <Link key={title} className='flex underline hover:text-orangeade' href={link}>
                      {title}
                    </Link>
                  ))}
                </div>
              </div> */}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CurrentProjects;
