import Avatar from "../../atoms/Avatar/Avatar";
import Button from "../../atoms/Button/Button";
import { PlusIcon } from "@heroicons/react/20/solid";

const CardList = ({
  list,
  srcSize = 10,
  titleColor,
  children,
  subListName,
  addSubList,
  addToList,
  listWidth = 28,
}) => {
  const listClass = "flex flex-col justify-between hover:shadow-md rounded-xl m-2 p-2";

  return (
    <ul className='flex m-4 flex-wrap'>
      {list.map((l, i) => (
        <li key={i} className={listClass}>
          <div className='flex'>
            {l.src && (
              <Avatar src={l.src} round width={srcSize} height={srcSize} className='ring-white' />
            )}
            <div className={`flex flex-col w-${listWidth}`}>
              <p className={`underline text-${titleColor}`}>{l.title}</p>
              {children && l[subListName] && l[subListName].map((subL) => children(subL))}
            </div>
          </div>
          {addSubList && <Button label={addSubList} />}
        </li>
      ))}

      {addToList && (
        <li className={`${listClass} w-36`}>
          <div className='animate-pulse flex space-x-4'>
            {list[0].src && <div className='rounded-full bg-gray h-10 w-10' />}
            <div className='flex-1 space-y-3 py-1'>
              <div className='h-2 bg-gray rounded' />
              <div className='h-2 bg-gray rounded mr-8' />
              <div className='h-2 bg-gray rounded' />
            </div>
          </div>
          <Button label={<PlusIcon className='w-6 h-6' />} type='button' />
        </li>
      )}
    </ul>
  );
};

export default CardList;
