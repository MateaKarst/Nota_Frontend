import React from "react";
import ChatText from "../components/Chat/ChatText";
import { useNavigate } from "react-router-dom";

import { ReactComponent as BackArrow } from '../assets/icons/backarrow-icon.svg';
import { ReactComponent as Pfp } from "../assets/chat/man.svg";

import "../styles/chat/chat.scss";

const Chat = () => {

  const navigate = useNavigate();
    const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="chat-app">
      <div className="chat-header">
         <button className="go-back" onClick={handleBackClick}>
          <BackArrow className="icon-style" />
        </button>
        <Pfp className="pfp" />
        <span className="username">Guitarist1001</span>
      </div>

        <div className="chat-body">
          <ChatText
            text="Hey! You're really good at playing drums, wanna collab?"
            time="12:30 PM"
            variant="receiver"
          />
  
          <ChatText
            text="Thanks! I have a perfect drum track for your song"
            time="12:39 PM"
            variant="sender"
          />
        </div>

      <div className="chat-input">
        <input type="text" placeholder="Type here..." />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;
