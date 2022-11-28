import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const Notification = ({ message, kind = "success", onClose = () => {} }) => {
  const [opacity, setOpacity] = useState("opacity-100");

  if (opacity === "opacity-0")
    setTimeout(() => {
      onClose();
    }, 500);

  return (
    <div
      className={`relative w-64 bg-white shadow-xl rounded-xl border-y-4 
      ${kind === "success" && "border-y-green"} 
      ${kind === "error" && "border-y-red"} 
      ${kind === "info" && "border-y-mustard"} 
      ${opacity} 
      flex justify-between items-center p-4`}
    >
      <div className='text-sm select-none'>{message}</div>
      <XMarkIcon
        onClick={() => {
          setOpacity("opacity-0");
        }}
        className={`cursor-pointer w-6 h-6 hover:scale-125 active:opacity-20 active:scale-50`}
      />
    </div>
  );
};

export default Notification;
