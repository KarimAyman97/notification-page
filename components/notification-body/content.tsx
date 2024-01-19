import NotificationSubject from "@/components/notification-body/subject";
import NotificationTime from "@/components/notification-body/time";
import { NotificationType } from "@/utils/notifications";

type contentProps = {
  name: string;
  actionName: string | undefined;
  type: NotificationType;
  timeDone: string;
  read: boolean;
};
const NotificationContent = ({
  name,
  actionName,
  timeDone,
  type,
  read,
}: contentProps) => {
  return (
    <div className="pr-5 font-plus-jakarta-sans flex flex-col relative">
      <NotificationSubject
        name={name}
        actionName={actionName}
        type={type}
        read={read}
      />
      <NotificationTime timeDone={timeDone} />
    </div>
  );
};

export default NotificationContent;
