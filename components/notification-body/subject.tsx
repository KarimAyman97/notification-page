import { NotificationType } from "@/utils/notifications";

type subjectProps = {
  name: string;
  actionName: string | undefined;
  type: NotificationType;
  read: boolean;
};

const NotificationSubject = ({
  name,
  actionName,
  type,
  read,
}: subjectProps) => {
  const data = getNotificationMessage(type);
  return (
    <div className="flex items-center ">
      <p className=" text-base text-dark-grayish-blue">
        <span className="text-black font-extrabold capitalize mr-2 hover:text-blue cursor-pointer">
          {name}
        </span>
        {data}
        <span
          className={`mx-1 cursor-pointer  font-extrabold ${
            type === NotificationType.JoinGroup ||
            type === NotificationType.leftGroup
              ? "text-blue"
              : "text-dark-grayish-blue hover:text-blue"
          }`}
        >
          {actionName}
        </span>
        {!read && (
          <span className="bg-red w-[8px] h-[8px] rounded-full mt-1 inline-block"></span>
        )}
      </p>
    </div>
  );
};

const getNotificationMessage = (type: NotificationType): string => {
  switch (type) {
    case NotificationType.Follow:
      return "followed you";
    case NotificationType.postReact:
      return "reacted to your recent post";
    case NotificationType.JoinGroup:
      return " has joined your group";
    case NotificationType.leftGroup:
      return "left the group";
    case NotificationType.Comment:
      return " commented on your picture";
    case NotificationType.Message:
      return " sent you a private message";
    default:
      return "";
  }
};

export default NotificationSubject;
