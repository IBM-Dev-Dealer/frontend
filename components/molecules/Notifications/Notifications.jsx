import Notification from "../../../components/atoms/Notification/Notification";
import styles from "./Notifications.module.scss";

const Notifications = ({ notifications = [], removeNotification }) => {
  return (
    <div className={styles.notifications}>
      {notifications.map((notification) => (
        <Notification
          key={`${notification.kind}_${notification.id}`}
          message={notification.message}
          kind={notification.kind}
          id={notification.id}
          onClose={removeNotification}
        />
      ))}
    </div>
  );
};

export default Notifications;
