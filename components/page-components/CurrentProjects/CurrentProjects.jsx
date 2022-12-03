import Client from "./components/Client";
import CardList from "../../molecules/CardList/CardList";

const formatDate = (date, moment) => new Date(JSON.parse(date)[moment]).toLocaleDateString("RO-ro");
const formatTechnologies = (technologies) => JSON.parse(technologies).map((t) => t.technology);

const CurrentProjects = ({
  projects,
  // client,
  // technologies,
  // developers,
  // repos,
  // slackChannels,
  // tutorials,
}) => {
  const borderTopClass = "m-5 p-5 border-t-2 border-";

  console.log("projects", projects);
  Date.now().toLocaleString("RO-ro");
  return (
    <div>
      {projects.map((project, i) => {
        return (
          <div key={i}>
            <Client
              name={project.client}
              project={project.projectName}
              startDate={formatDate(project.projectPeriod, "start")}
              endDate={formatDate(project.projectPeriod, "end")}
            />
            <div className={`${borderTopClass}light-green`}>
              <p className='text-xl text-light-green'>Technologies:</p>
              <CardList
                list={formatTechnologies(project.technologies)}
                titleColor='light-green'
                // subListName='level'
                // addSubList='Add seniority level'
                // addToList
              >
                {({ type, dev }) => (
                  <div className='flex justify-between'>
                    <div className='text-sm'>{type}</div>
                    <div className='text-sm'>{dev}</div>
                  </div>
                )}
              </CardList>
            </div>
            <div className={`${borderTopClass}blue`}>
              <p className='text-xl text-blue'>Developers:</p>
              {/* <CardList
                list={developers}
                list={formatTechnologies(project.developers)}
                titleColor='blue'
                subListName='techSeniority'
                addSubList='Add technology'
                addToList
                listWidth={32}
              >
                {({ technology, seniorityLevel }) => (
                  <div className='text-sm'>
                    {technology.label} - {seniorityLevel.label}
                  </div>
                )}
              </CardList> */}
            </div>
            {/* <div className={`flex justify-between flex-wrap ${borderTopClass}orangeade`}>
              <div>
                <p className='text-xl text-orangeade'>Repos:</p>
                <CardList
                  list={repos}
                  titleColor='orangeade'
                  subListName='zone'
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
                <p className='text-xl text-orangeade'>Slack channels:</p>
                <div className='text-sm flex-wrap'>
                  {slackChannels.map((slack) => (
                    <Link
                      key={slack}
                      className='mr-3 rounded-xl bg-mustard hover:bg-orangeade'
                      href={slack}
                    >
                      {slack}
                    </Link>
                  ))}
                  <Button label={<PlusIcon className='w-6 h-6' />} type='button' isSquare={true} />
                </div>
              </div>
              <div>
                <p className='text-xl text-orangeade'>Tutorials:</p>
                <div className='text-sm'>
                  {tutorials.map(({ link, title }) => (
                    <Link key={title} className='flex underline hover:text-orangeade' href={link}>
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default CurrentProjects;
