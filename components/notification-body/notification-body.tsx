import NotificationAvatar from "@/components/notification-body/avatar";
import NotificationContent from "@/components/notification-body/content";
import NotificationMessage from "@/components/notification-body/message";
import { NotificationType, notification } from "@/utils/notifications";
import ActionImage from "@/components/notification-body/action-image";

const NotificationBody = ({ notification }: { notification: notification }) => {
  return (
    <div
      className={` mx-5 rounded-lg pb-3 ${
        notification.read ? "bg-white" : "bg-very-light-grayish-blue"
      }`}
    >
      <div className=" flex items-center">
        <NotificationAvatar avatar={notification.avatar} />
        <NotificationContent
          timeDone={notification.timeDone}
          name={notification.name}
          actionName={notification.actionName}
          type={notification.type}
          read={notification.read}
        />
        {notification.actionImage && (
          <div className="sm:ml-28">
            <ActionImage imageURL={notification.actionImage} />
          </div>
        )}
      </div>
      <div className=" ml-20 mr-10 lg:w-[550px]">
        {notification.message &&
          notification.type == NotificationType.Message && (
            <NotificationMessage />
          )}
      </div>
    </div>
  );
};

export default NotificationBody;
