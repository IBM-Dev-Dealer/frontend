import { createContext, useCallback, useState } from "react";

export const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      kind: "success",
      message: "This is a test messae erthe rt hfrjythertnert hw etg sr th bwet g a4 a5h srt hsr5.",
      id: "id1",
    },
    {
      kind: "error",
      message: "Thidsadasdsdasw etg sr th bwet g a4 a5h srt hsr5.",
      id: "id2",
    },
  ]);

  const notify = useCallback(
    (newNotification) =>
      setNotifications((prev) => {
        const newNotifications = [...prev];
        newNotifications.unshift(newNotification);
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
