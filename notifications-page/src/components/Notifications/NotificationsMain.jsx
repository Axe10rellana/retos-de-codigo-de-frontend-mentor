//react
import { useState } from "react";

//componentes
import { NotificationIcon } from "../";

const NotificationsMain = ({ allNotifications, count, setCount }) => {
  return (
    <>
      {allNotifications.map((notification) => {
        //variables de estado
        const [isChecked, setIsChecked] = useState(notification);

        //funciones
        const checkNotification = () => {
          if (!isChecked.checked && count > 0) {
            setIsChecked({ ...isChecked, checked: true });
            setCount(count - 1);
          }
        };

        return (
          <article
            onClick={checkNotification}
            key={notification.id}
            className={`flex cursor-pointer bg-very-light-grayish-blue mx-6 mb-3 py-4 rounded-md ${
              isChecked.checked && "bg-white cursor-default"
            } ${
              notification.action === "sent you a private message" && "flex-col"
            } ${
              notification.action === "commented on your picture" &&
              "justify-between"
            }`}
          >
            <div
              className={`flex items-center ${
                notification.action === "send you a private message" && "mb-4"
              }`}
            >
              <img
                className="w-[3rem] mx-4 mt-[-1rem] sm:mt-0"
                src={notification.userImg}
                alt={notification.userName}
              />
              <div className="flex flex-col">
                <div>
                  <span
                    className={`font-bold mr-2 ${
                      !isChecked.checked &&
                      notification.action === "followed you" &&
                      "hover:text-blue-current"
                    }`}
                  >
                    {notification.userName}
                  </span>{" "}
                  <span className={`text-dark-grayish-blue mr-2`}>
                    {notification.action}
                  </span>
                  <span
                    className={`text-dark-grayish-blue font-bold mr-1 ${
                      !isChecked.checked && "hover:text-blue-current"
                    } ${
                      notification.action === "has joined your group" &&
                      !isChecked.checked &&
                      "text-blue-current"
                    } ${
                      notification.action === "left the group" &&
                      !isChecked.checked &&
                      "text-blue-current"
                    }`}
                  >
                    {notification.event}
                  </span>
                  {!isChecked.checked && (
                    <NotificationIcon className="w-[0.5rem] inline-flex fill-orange-500 text-orange-500" />
                  )}
                </div>
                <span className="text-grayish-blue">{notification.time}</span>
              </div>
            </div>
            {notification.action === "sent you a private message" && (
              <div className="flex items-end">
                <p className="ml-[5rem] mr-[1rem] text-dark-grayish-blue rounded-md border-solid border-[1px] p-3 border-light-grayish-blue-1 cursor-pointer hover:bg-light-grayish-blue-2">
                  {notification.sendMessage}
                </p>
              </div>
            )}
            {notification.action === "commented on your picture" && (
              <img
                className="w-[3rem] mt-[-1rem] sm:mt-0 object-contain mx-4 cursor-pointer"
                src={notification.commentImg}
                alt="User"
              />
            )}
          </article>
        );
      })}
    </>
  );
};

export default NotificationsMain;
