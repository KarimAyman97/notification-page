export enum NotificationType {
  Follow = "follow",
  postReact = "post-react",
  JoinGroup = "join-group",
  leftGroup = "left-group",
  Comment = "comment",
  Message = "message",
}

export type notification = {
  name: string;
  avatar: string;
  type: NotificationType;
  actionName?: string;
  actionImage?: string;
  message?: string;
  timeDone: string;
  read: boolean;
};

export const notifications: notification[] = [
  {
    name: "mark webber",
    avatar: "/images/avatar-mark-webber.webp",
    type: NotificationType.postReact,
    actionName: "My first tournament today!",
    timeDone: "1m ago",
    read: false,
  },
  {
    name: "angela Gray",
    avatar: "/images/avatar-angela-gray.webp",
    type: NotificationType.Follow,
    timeDone: "5m ago",
    read: false,
  },
  {
    name: "jacob thompson",
    avatar: "/images/avatar-jacob-thompson.webp",
    type: NotificationType.JoinGroup,
    actionName: "Chess Club",
    timeDone: "1 day ago",
    read: false,
  },
  {
    name: "Rizky Hasanuddin",
    avatar: "/images/avatar-rizky-hasanuddin.webp",
    type: NotificationType.Message,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having a lot of fun and improving my games.",
    timeDone: "5 days ago",
    read: true,
  },
  {
    name: "Kimberly Smith",
    avatar: "/images/avatar-kimberly-smith.webp",
    type: NotificationType.Comment,
    timeDone: "1 week ago",
    actionImage: "/images/image-chess.webp",
    read: true,
  },
  {
    name: "Nathan peterson",
    avatar: "/images/avatar-nathan-peterson.webp",
    type: NotificationType.postReact,
    timeDone: "2 weeks ago",
    actionName: "5 end-game strategies to increase your win rate",
    read: true,
  },
  {
    name: "Anna kim",
    avatar: "/images/avatar-anna-kim.webp",
    type: NotificationType.leftGroup,
    timeDone: "2 weeks ago",
    actionName: "Chess Club",
    read: true,
  },
];
