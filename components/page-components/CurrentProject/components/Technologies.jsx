import Avatar from "../../../atoms/Avatar/Avatar";

const Technologies = ({ technologies }) => {
  return (
    <ul className='flex m-5 flex-wrap'>
      {technologies.map((tech) => {
        return (
          <li key={tech.label} className='flex m-2 p-2 w-48 hover:shadow-md'>
            <Avatar src={tech.logo} round width={10} height={10} className='ring-white' />
            <div className='flex-1'>
              <p className='underline text-light-green'>{tech.label}</p>
              {tech.level.map((lev, i) => {
                return (
                  <p key={i} className='text-sm'>
                    {lev.type}
                  </p>
                );
              })}
            </div>
            <div className='mt-6'>
              {tech.level.map((lev, i) => {
                return (
                  <p key={i} className='text-sm'>
                    {lev.dev}
                  </p>
                );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Technologies;
