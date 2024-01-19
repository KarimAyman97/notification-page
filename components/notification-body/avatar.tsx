import Image from "next/image";

const NotificationAvatar = ({ avatar }: { avatar: string }) => {
  return (
    <Image
      src={avatar}
      className="w-10 h-10 rounded-full m-5"
      width={100}
      height={100}
      alt="avatar-image"
    ></Image>
  );
};

export default NotificationAvatar;
