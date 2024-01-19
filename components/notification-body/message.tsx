const NotificationMessage = ({ message }: { message: string }) => {
  return (
    <div className="border rounded p-5 cursor-pointer hover:bg-very-light-grayish-blue">
      <p>{message}</p>
    </div>
  );
};

export default NotificationMessage;
