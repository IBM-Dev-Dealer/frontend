import { XMarkIcon } from "@heroicons/react/20/solid";

const Notification = ({ message, kind }) => {
  return (
    <div className='absolute'>
      <div className='p-6'>{message}</div>
      <XMarkIcon className='cursor-pointer w-6 h-6 hover:scale-125 active:opacity-20 active:scale-50' />
    </div>
  );
};

export default Notification;
