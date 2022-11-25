import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const InfoNote = ({ message }) => {
  const [displayMessage, setDisplayMessage] = useState(false);

  return (
    <div className='relative w-6 h-6'>
      <InformationCircleIcon
        onClick={() => setDisplayMessage((prev) => !prev)}
        className={`cursor-pointer w-6 h-6 hover:scale-125 fill-${
          displayMessage ? "orangeade" : "gray"
        } active:opacity-20 active:scale-50`}
      />{" "}
      <div
        className={`select-none p-4 rounded-xl shadow-lg border-t-orangeade border-t-2 text-xs z-10 w-60 bg-white absolute 
        opacity-${displayMessage ? "100" : "0"}`}
      >
        {message}
      </div>
    </div>
  );
};

export default InfoNote;
