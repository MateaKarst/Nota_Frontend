import React from "react";
import '../../styles/components/notification-item.css'


const NotificationItem = ({ avatar, username, trackTitle, time}) => (
    <div className="notification-item">
        <img src={avatar} alt={username} className="avatar" />
        <div className="text">
            <p>
                <strong>{username}</strong> liked your track <i>"{trackTitle}"</i>
            </p>
            <span className="time">{time}</span>
        </div>
    </div>
);

export default NotificationItem;