import { createContext, useCallback, useState } from "react";

export const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const notify = useCallback(
    (newNotification) =>
      setNotifications((prev) => {
        const newNotifications = [...prev];
        newNotifications.push(newNotification);
        return newNotifications;
      }),
    [],
  );

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => {
      const newArr = JSON.parse(JSON.stringify(prev));
      return newArr.filter((n) => n.id !== id);
    });
  }, []);

  const value = {
    notify,
    notifications,
    removeNotification,
  };

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};
