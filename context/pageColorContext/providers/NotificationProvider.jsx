import { createContext, useState } from "react";
import Notification from "../../../components/atoms/Notification/Notification";

export const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      kind: "success",
      message: "This is a test messae erthe rt hfrjythertnert hw etg sr th bwet g a4 a5h srt hsr5.",
    },
    {
      kind: "success",
      message: "This is a test messae erthe rt hfrjythertnert hw etg sr th bwet g a4 a5h srt hsr5.",
    },
  ]);

  const notify = (newNotification) =>
    setNotifications((prev) => {
      const newNotifications = [...prev];
      newNotifications.push(newNotification);
      return newNotifications;
    });

  const value = {
    notify,
    notifications,
  };

  const onNotificationClose = (index) => {
    setNotifications((prev) => {
      const newNotifications = [...prev];
      newNotifications.splice(index, 1);
      return newNotifications;
    });
  };

  return (
    <NotificationContext.Provider value={value}>
      <>{children}</>
      <div className='absolute bottom-12 left-12 max-w-xs flex flex-col gap-4'>
        {notifications.map((notification, i) => (
          <Notification
            key={i}
            message={
              notification +
              " .  " +
              "This is a test messae erthe rt hfrjythertnert hw etg sr th bwet g a4 a5h srt hsr5."
            }
            kind='success'
            onClose={() => {
              onNotificationClose(i);
            }}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
