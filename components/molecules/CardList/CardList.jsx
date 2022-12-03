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
  const listClass = "flex flex-col justify-between shadow-md rounded-xl py-2 px-4";
  console.log("list", list);
  return (
    <ul className='flex mt-4 my-2 flex-wrap gap-4'>
      {list.map((l, i) => (
        <li key={i} className={listClass}>
          <div className='flex'>
            {l.image && (
              <Avatar src={l.image} round width={srcSize} height={srcSize} className='ring-white' />
            )}
            <div className={`flex flex-col w-${listWidth}`}>
              <p className={`text-${titleColor}`}>{l.label}</p>
              {children &&
                l[subListName] &&
                l[subListName].map((subL, i) => <div key={i}>children(subL)</div>)}
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
          <Button label={<PlusIcon className='w-6 h-6' />} type='button' className='p-4' />
        </li>
      )}
    </ul>
  );
};

export default CardList;
