import { useContext } from "react";
import { NotificationContext } from "../providers/NotificationProvider";

export const useNotifications = () => {
  const context = useContext(NotificationContext);

  return context;
};
