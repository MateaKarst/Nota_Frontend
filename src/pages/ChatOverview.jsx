
import React from "react";
import HeaderVariants from '../components/Headers/HeaderVariants';
import SearchBar from '../components/Search/SearchBar';
import Message from '../components/Message';
import { ReactComponent as WriteIcon } from "../assets/icons/write.svg";
import { ReactComponent as ProfilePic1 } from "../assets/chat//man.svg"; 
import { ReactComponent as ProfilePic2 } from "../assets/chat/johnny.svg"; 
import { ReactComponent as ProfilePic3 } from "../assets/chat/girl.svg"; 
import { ReactComponent as ProfilePic4 } from "../assets/chat/dog.svg"; 


import "../styles/variables.css";
import "../styles/pages/chat-overview.css";

function ChatOverview() {
    const chats = [
      {
        name: "Guitarist1001",
        lastMessage: "I'd love to hear it! Let me know when it's best for you",
        profileImage:  <ProfilePic1 />
      },
      {
        name: "JohnnySings",
        lastMessage: "I love your songs! Keep creating!",
        profileImage: <ProfilePic2 />
      },
      {
        name: "Guitarist1001",
        lastMessage: "Really nice twist you added to my track",
        profileImage: <ProfilePic3 />
      },
      {
        name: "user123445",
        lastMessage: "Let's work together on a song!",
        profileImage: <ProfilePic4 />
      }
    ];


  return (
    <div className="chat">
      <HeaderVariants mode="text" title="Messages"/>

    <div className="searchbar">
        <SearchBar />
        <WriteIcon className="icon-button" />
      </div>

    <div className="overview">
    {chats.map((chat, index) => (
          <Message
            key={index}
            name={chat.name}
            lastMessage={chat.lastMessage}
            profileImage={chat.profileImage}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatOverview;
