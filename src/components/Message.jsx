import React from "react";
import "../styles/components/message.css";
import { useNavigate } from "react-router-dom";


export default function Message({ name, lastMessage, profileImage }) {
  const navigate = useNavigate();
  console.log("get messgae for:", name, lastMessage);
  return (
    <div className="message-preview">
     <div className="chat-photo"    
    onClick={() => navigate(`/profilefriend/${name}`)}>
        {profileImage} 
      </div>
      <div className="chat-text" 
       onClick={() => navigate(`/chat`)}>
        <div className="chat-name">{name}</div>
        <div className="chat-message">{lastMessage}</div>
      </div>
    </div>
  );
}