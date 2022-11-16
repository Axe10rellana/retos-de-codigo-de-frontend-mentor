const NotificationsHeader = ({ count, checkAllNotifications }) => {
  return (
    <div className="flex justify-between mx-6 py-4 items-center">
      <div className="flex flex-row items-center">
        <h2 className="mr-2 font-bold text-xl">Notifications</h2>
        <span className="bg-blue-current text-white px-3 rounded-md">
          {count}
        </span>
      </div>
      <button
        onClick={checkAllNotifications}
        className="text-dark-grayish-blue hover:text-blue-current text-sm"
      >
        Mark all as read
      </button>
    </div>
  );
};

export default NotificationsHeader;
