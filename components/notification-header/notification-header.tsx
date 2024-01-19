import ReadBtn from "@/components/notification-header/read-btn";
import NotificationHead from "@/components/notification-header/head";

const NotificationHeader = () => {
  return (
    <div className="flex flex-row justify-between m-5 font-plus-jakarta-sans">
      <NotificationHead />
      <ReadBtn />
    </div>
  );
};

export default NotificationHeader;
