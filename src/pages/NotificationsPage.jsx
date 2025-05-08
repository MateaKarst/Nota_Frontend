import React from "react";
import NotificationItem from "../components/Notifications/NotificationItem";
import HeaderVariants from "../components/Headers/HeaderVariants";

const notifications = {
    recent: [
        {
            id:1,
            avatar: "https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg",
            username: "Guitarist101",
            trackTitle: "My Family",
            time: "5 min ago",
        },
        {
            id:2,
            avatar: "https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg",
            username: "Guitarist102",
            trackTitle: "My Family",
            time: "10 min ago",
        },
    ],
    yesterday: [
        {
            id:3,
            avatar: "https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg",
            username: "Guitarist103",
            trackTitle: "My Family",
            time: "5 min ago",
        },
        {
            id:4,
            avatar: "https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg",
            username: "Guitarist104",
            trackTitle: "My Family",
            time: "5 min ago",
        },
    ],
    older: [
        {
            id:5,
            avatar: "https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg",
            username: "Guitarist105",
            trackTitle: "My Family",
            time: "5 min ago",
        },
    ],
};

const NotificationsPage = () => {
    return (
        <div>
        <div className="header"> 
    <HeaderVariants mode="text" title="Notifications"/>
    </div>
        <div className="titles">
          <Section title="Recent" items={notifications.recent} />
          <Section title="Yesterday" items={notifications.yesterday} />
          <Section title="Older" items={notifications.older} />
        </div>
        </div>
      );
    };
    
    const Section = ({ title, items }) => (
      <div className="">
        <h2 style={{textAlign: "left", paddingLeft:"20px" }}>{title}</h2>
        {items.map((n) => (
          <NotificationItem key={n.id} {...n} />
        ))}
      </div>
    );
    
    export default NotificationsPage;