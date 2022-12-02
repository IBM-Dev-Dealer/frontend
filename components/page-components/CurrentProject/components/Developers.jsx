import Avatar from "../../../atoms/Avatar/Avatar";

const Developers = ({ developers }) => {
  return (
    <ul className='flex m-5 flex-wrap'>
      {developers.map((dev) => {
        return (
          <li key={dev.name} className='flex m-2 p-2 hover:shadow-md'>
            <Avatar src={dev.pic} round width={10} height={10} className='ring-white' />
            <div>
              <p className='underline text-blue'>{dev.name}</p>
              <p className='text-sm'>{dev.technology}</p>
              <p className='text-sm'>{dev.level}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Developers;
