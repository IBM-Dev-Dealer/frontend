import { useContext } from "react";
import { NotificationContext } from "../providers/NotificationProvider";

export const useNotifications = () => {
  const { notify } = useContext(NotificationContext);

  return { notify };
};
