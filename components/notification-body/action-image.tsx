import Image from "next/image";

const ActionImage = ({ imageURL }: { imageURL: string }) => {
  return (
    <Image
      src={imageURL}
      className="w-10 h-10 rounded m-5 hover:border-4 cursor-pointer border-light-grayish-blue-1 "
      width={100}
      height={100}
      alt="avatar-image"
    ></Image>
  );
};

export default ActionImage;
