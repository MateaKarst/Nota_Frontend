import React, { useState, useEffect } from "react";
import { getNotifications } from "../services/notificationsService"
import NotificationItem from "../components/Notifications/NotificationItem";
import HeaderVariants from "../components/Headers/HeaderVariants";


const NotificationsPage = () => {
  const [groupedNotifications, setGroupedNotifications] = useState({
    recent: [],
    yesterday: [],
    older: [],
  });

  useEffect(() => {
    const loadData = async () => {
      const data = await getNotifications();

      //group notifications by 'time' string
      const recent = data.filter(n => n.time.includes("min ago"));
      const yesterday = data.filter(n => n.time.includes("Yesterday"));
      const older = data.filter(n => !n.time.includes("min ago") && !n.time.includes("Yesterday"));

      setGroupedNotifications({ recent, yesterday, older });
    };
    loadData();
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "#343331", height: "100vh", color: "white" }}>
        <div className="header">
          <HeaderVariants mode="text" title="Notifications" />
        </div>
        <div className="titles" style={{ marginTop: "30px" }}>
          <Section title="Recent" items={groupedNotifications.recent} />
          <Section title="Yesterday" items={groupedNotifications.yesterday} />
          <Section title="Older" items={groupedNotifications.older} />
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, items }) => (
  <div style={{ marginBottom: '20px' }}>  {/* Add spacing between sections */}
    <h2 style={{ textAlign: "left", paddingLeft: "2dvh", color: "white" }}>{title}</h2>
    {items.map(n => (
      <NotificationItem key={n.id} {...n} />
    ))}
  </div>
);


export default NotificationsPage;