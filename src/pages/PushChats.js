import React, { useEffect } from 'react';
import { sendMessage } from '../firebase'; 

const hardcodedChats = [
  { name: "Guitarist1001", text: "I'd love to hear it! Let me know when it's best for you" },
  { name: "JohnnySings", text: "I love your songs! Keep creating!" },
  { name: "Guitarist1002", text: "Really nice twist you added to my track" },
  { name: "user123445", text: "Let's work together on a song!" },
];

const PushChats = () => {
    useEffect(() => {
      hardcodedChats.forEach(chat => {
        sendMessage(chat); // Send chat to Firebase
      });
    }, []); 
  
    return (
      <div>
        <h1>Chat Overview</h1>
        <p>Your messages have been sent to Firebase!</p>
      </div>
    );
  };
  
  export default PushChats;