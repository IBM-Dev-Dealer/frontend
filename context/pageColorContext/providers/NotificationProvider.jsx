import { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const notify = (newNotification) =>
    setNotifications((prev) => {
      const previousNotifications = [...prev];
      previousNotifications.push(newNotification);
    });

  const value = {
    notify,
    notifications,
  };

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};
