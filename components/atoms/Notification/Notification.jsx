import { XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const Notification = ({ message = "", kind = "success", id = "", onClose }) => {
  const [opacity, setOpacity] = useState("opacity-100");

  useEffect(() => {
    if (opacity === "opacity-0") {
      setTimeout(() => {
        onClose && onClose(id);
      }, 500);
    }
  }, [id, onClose, opacity]);

  return (
    <div
      className={`relative w-64 bg-white shadow-xl rounded-xl border-y-4 ${
        kind === "success" && "border-y-green"
      } ${kind === "error" && "border-y-red"} ${
        kind === "info" && "border-y-mustard"
      } ${opacity} flex justify-between items-center p-4`}
    >
      <div className='text-sm select-none'>{message}</div>
      <XMarkIcon
        onClick={() => {
          console.log("id close", id);
          setOpacity("opacity-0");
        }}
        className={`cursor-pointer w-6 h-6 hover:scale-125 active:opacity-20 active:scale-50 shrink-0`}
      />
    </div>
  );
};

export default Notification;
