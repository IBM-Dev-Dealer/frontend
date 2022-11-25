import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const InfoNote = ({ message, position = "left" }) => {
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    displayMessage
      ? setIsHidden(false)
      : setTimeout(() => {
          setIsHidden(true);
        }, 250);
  }, [displayMessage]);

  return (
    <div className='relative w-6 h-6'>
      <InformationCircleIcon
        onClick={() => setDisplayMessage((prev) => !prev)}
        className={`cursor-pointer w-6 h-6 hover:scale-125 ${
          displayMessage ? "fill-orangeade" : "fill-gray"
        } active:opacity-20`}
      />
      <div
        className={`leading-5 select-none p-4 rounded-xl shadow-lg border-t-orangeade border-t-2 text-xs z-10 w-64 bg-white 
        absolute top-8
        ${position === "left" && "left-0"}
        ${position === "right" && "right-0"}
        ${position === "center" && "-left-28"}
        opacity-${displayMessage ? "100" : "0"} ${isHidden ? "hidden" : "block"}`}
      >
        {message}
      </div>
    </div>
  );
};

export default InfoNote;
