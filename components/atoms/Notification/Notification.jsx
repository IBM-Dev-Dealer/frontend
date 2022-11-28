import { XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const setNotificationColor = (kind, setColor) => {
  switch (kind) {
    case "success":
      setColor("border-y-green");
      break;
    case "error":
      setColor("border-y-");
      break;
    case "info":
      setColor("border-y-mustard");
      break;
  }
};

const Notification = ({ message, kind = "success", onClose = () => {} }) => {
  const [borderColorClass, setBorderColorClass] = useState("border-y-green");
  const [opacity, setOpacity] = useState("opacity-100");

  useEffect(() => {
    setNotificationColor(kind, setBorderColorClass);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOpacity("opacity-0");
    }, 5000);
  }, []);

  if (opacity === "opacity-0")
    setTimeout(() => {
      onClose();
    }, 500);

  return (
    <div
      className={`relative  bg-white shadow-xl rounded-xl border-y-4 ${borderColorClass} pt-8 pb-6 px-4 ${opacity}`}
    >
      <div className='text-sm select-none'>{message}</div>
      <XMarkIcon
        onClick={() => {
          onClose();
        }}
        className={`cursor-pointer w-6 h-6 hover:scale-125 active:opacity-20 active:scale-50 
      absolute top-2 right-2`}
      />
    </div>
  );
};

export default Notification;
