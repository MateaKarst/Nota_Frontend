import React from "react";
import "../../styles/chat/chatText.scss";

const ChatText = ({ text, time, variant = "receiver" }) => {
  return (
    <div className={`chat-message ${variant}`}>
      <div className="bubble">
        <p>{text}</p>
        <span className="time">{time}</span>
      </div>
    </div>
  );
};

export default ChatText;
