import NotificationHeader from "@/components/notification-header/notification-header";
import NotificationBody from "@/components/notification-body/notification-body";
import { notifications } from "@/utils/notifications";
const NotificationCard = () => {
  return (
    <div className="flex flex-col bg-white shadow-sm rounded-md gap-2 my-20 w-[700px]">
      <NotificationHeader />
      {notifications.map((notification, index) => (
        <div key={index}>
          <NotificationBody notification={notification} />
        </div>
      ))}
    </div>
  );
};

export default NotificationCard;
