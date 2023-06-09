//react
import { useState } from "react";

//imagenes
import {
  AvatarMarkWebber,
  AvatarAngelaGray,
  AvatarJacobThompson,
  AvatarRizkyHasanuddin,
  AvatarKimberlySmith,
  AvatarNathanPeterson,
  AvatarAnnaKim,
  ImageChess,
} from "./assets";

//componentes
import { NotificationsHeader, NotificationsMain } from "./components";

//data
const notifications = [
  {
    id: 1,
    userName: "Mark Webber",
    action: "reacted to your recent post",
    time: "1m ago",
    userImg: AvatarMarkWebber,
    event: "My first tournament today!",
    commentImg: false,
    sendMessage: false,
    checked: false,
  },
  {
    id: 2,
    userName: "Angela Gray",
    action: "followed you",
    time: "5m ago",
    userImg: AvatarAngelaGray,
    event: false,
    commentImg: false,
    sendMessage: false,
    checked: false,
  },
  {
    id: 3,
    userName: "Jacob Thompson",
    action: "has joined your group",
    time: "1 day ago",
    userImg: AvatarJacobThompson,
    event: "Chess Club",
    commentImg: false,
    sendMessage: false,
    checked: false,
  },
  {
    id: 4,
    userName: "Rizky Hasanuddin",
    action: "sent you a private message",
    time: "5 days ago",
    userImg: AvatarRizkyHasanuddin,
    event: false,
    commentImg: false,
    sendMessage:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    checked: true,
  },
  {
    id: 5,
    userName: "Kimberly Smith",
    action: "commented on your picture",
    time: "1 week ago",
    userImg: AvatarKimberlySmith,
    event: false,
    commentImg: ImageChess,
    sendMessage: false,
    checked: true,
  },
  {
    id: 6,
    userName: "Nathan Peterson",
    action: "reacted to your recent post",
    time: "2 weeks ago",
    userImg: AvatarNathanPeterson,
    event: "5 end-game strategies to increase your win rate",
    commentImg: false,
    sendMessage: false,
    checked: true,
  },
  {
    id: 7,
    userName: "Anna Kim",
    action: "left the group",
    time: "2 weeks ago",
    userImg: AvatarAnnaKim,
    event: "Chess Club",
    commentImg: false,
    sendMessage: false,
    checked: true,
  },
];

const App = () => {
  //variables de estado
  let [allNotifications, setAllNotifications] = useState(notifications);

  //variables
  let cantidad = 0;
  let checkTrue = true;
  allNotifications.map((notification) => {
    if (!notification.checked) {
      cantidad = cantidad + 1;
    }
  });

  //variables de estado
  let [count, setCount] = useState(cantidad);

  //funciones
  const checkAllNotifications = () => {
    if (count > 0) {
      allNotifications.map((notification) => {
        notification.checked = checkTrue;
      });
      setCount(0);
    }
  };

  return (
    <div className="sm:rounded-lg sm:mx-auto m-0 md:w-[600px] lg:w-[800px] w-full sm:drop-shadow-sm bg-white sm:my-10">
      <NotificationsHeader
        count={count}
        checkAllNotifications={checkAllNotifications}
      />
      <NotificationsMain
        allNotifications={allNotifications}
        setCount={setCount}
        count={count}
      />
    </div>
  );
};

export default App;
