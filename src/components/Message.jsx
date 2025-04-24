import React from "react";
import "../styles/components/message.css";



export default function Message({ name, lastMessage, profileImage }) {
  return (
    <div className="message-preview">
     <div className="chat-photo">
        {profileImage} 
      </div>
      <div className="chat-text">
        <div className="chat-name">{name}</div>
        <div className="chat-message">{lastMessage}</div>
      </div>
    </div>
  );
}