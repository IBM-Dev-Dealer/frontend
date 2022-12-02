import Link from "next/link";

const Repos = ({ repos }) => {
  return (
    <ul className='flex m-5 flex-wrap'>
      {repos.map((repo) => {
        return (
          <Link key={repo.name} href={repo.link} className='flex flex-col m-2 p-2 hover:shadow-md'>
            <p className='text-orangeade underline'>{repo.name}</p>
            <div className='text-sm'>
              {repo.zone.map((z) => (
                <p key={z} className='hover:text-mustard'>
                  {z}
                </p>
              ))}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default Repos;
