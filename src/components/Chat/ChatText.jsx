import React from "react";
import { formatDistanceToNow, format, isToday, isYesterday, isThisWeek } from "date-fns";
import "../../styles/chat/chatText.scss";

const ChatText = ({ text, timestamp, variant = "receiver" }) => {
  const date = new Date(timestamp);

  let formattedTime;
  if (isToday(date)) {
    formattedTime = formatDistanceToNow(date, { addSuffix: true }); // e.g. "5 minutes ago"
  } else if (isYesterday(date)) {
    formattedTime = "Yesterday";
  } else if (isThisWeek(date)) {
    formattedTime = format(date, "EEEE"); // e.g. "Tuesday"
  } else {
    formattedTime = format(date, "MMM d, yyyy"); // e.g. "May 30, 2025"
  }

  return (
    <div className={`chat-message ${variant}`}>
      <div className="bubble">
        <p>{text}</p>
        <span className="time">{formattedTime}</span>
      </div>
    </div>
  );
};

export default ChatText;
