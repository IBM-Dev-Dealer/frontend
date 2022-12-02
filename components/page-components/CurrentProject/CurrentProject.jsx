import Client from "./components/Client/Client";
import Technologies from "./components/Technologies";
import Developers from "./components/Developers";
import Repos from "./components/Repos";
import Link from "next/link";

const CurrentProject = ({ client, technologies, developers, repos, slackChannels, tutorials }) => {
  const borderTopClass = "m-5 p-5 border-t-2 border-";

  return (
    <div>
      <Client {...client} />
      <div className={`${borderTopClass}light-green`}>
        <p className='text-xl text-light-green'>Technologies:</p>
        <Technologies technologies={technologies} />
      </div>
      <div className={`${borderTopClass}blue`}>
        <p className='text-xl text-blue'>Developers:</p>
        <Developers developers={developers} />
      </div>
      <div className={`flex justify-between flex-wrap ${borderTopClass}orangeade`}>
        <div>
          <p className='text-xl text-orangeade'>Repos:</p>
          <Repos repos={repos} />
          <p className='text-xl text-orangeade'>Slack channels:</p>
          <div className='text-sm flex-wrap'>
            {slackChannels.map((slack) => (
              <Link key={slack} className='mr-3 rounded bg-mustard hover:bg-orangeade' href={slack}>
                {slack}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className='text-xl text-orangeade'>Tutorials:</p>
          <div className='text-sm'>
            {tutorials.map(({ link, name }) => (
              <Link key={name} className='flex underline hover:text-orangeade' href={link}>
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentProject;
