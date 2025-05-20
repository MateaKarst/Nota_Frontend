import React, { useEffect, useState } from "react";
import HeaderVariants from '../components/Headers/HeaderVariants';
import SearchBar from '../components/Search/SearchBar';
import Message from '../components/Message';
import { ReactComponent as WriteIcon } from "../assets/icons/write.svg";
import { ReactComponent as ProfilePic1 } from "../assets/chat//man.svg"; 
import { ReactComponent as ProfilePic2 } from "../assets/chat/johnny.svg"; 
import { ReactComponent as ProfilePic3 } from "../assets/chat/girl.svg"; 
import { ReactComponent as ProfilePic4 } from "../assets/chat/dog.svg"; 

import { db } from '../firebase'; 
import { collection, getDocs } from 'firebase/firestore';

import "../styles/variables.css";
import "../styles/pages/chat-overview.css";

function ChatOverview() {
  const [chats, setChats] = useState([]); //state to store chats

    useEffect(() => {
      const fetchChats = async () => {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const chatsArray = [];
        querySnapshot.forEach((doc) => {
          chatsArray.push(doc.data()); 
        });
        setChats(chatsArray); 
      };
  
      fetchChats();
    }, []); 

// Function to assign profile image based on the user's name
const getProfileImage = (name) => {
  switch (name) {
    case "Guitarist1001":
      return <ProfilePic1 />;
    case "JohnnySings":
      return <ProfilePic2 />;
    case "user123445":
      return <ProfilePic3 />;
    case "Guitarist1002":
      return <ProfilePic4 />;
    default:
      return <ProfilePic1 />; // Default image for unknown users
  }
};
    
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
            lastMessage={chat.message}
            profileImage={getProfileImage(chat.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatOverview;
