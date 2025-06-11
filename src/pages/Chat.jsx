import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ChatText from "../components/Chat/ChatText";
import Cookies from "js-cookie";
import API_ENDPOINTS from "../routes/apiEndpoints";
import { useAuth } from "../context/AuthProvider";

import { ReactComponent as BackArrow } from "../assets/icons/backarrow-icon.svg";
import { ReactComponent as Pfp } from "../assets/chat/man.svg";

import "../styles/chat/chat.scss";

const Chat = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [textInput, setTextInput] = useState("");
  const messagesEndRef = useRef(null);

  const otherUserId = "917e9d31-cd06-4a25-96ce-52cfe759e822"; //dummy usern from db

  const handleBackClick = () => navigate(-1);

  // GET
  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      setError(null);

      if (!user || !user.access_token) {
        setError("User not authenticated");
        setLoading(false);
        return;
      }

      Cookies.set("access_token", user.access_token, {
        expires: 7,
        sameSite: "lax",
      });

      try {
        const accessToken = user?.access_token || Cookies.get("access_token");
        if (!accessToken) throw new Error("No access token");

        const res = await fetch(API_ENDPOINTS.MESSAGES(otherUserId), {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "x-user-id": user.id,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch messages");

        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.error(err);
        setError(err.message || "Error fetching messages");
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [user, otherUserId]);

  //POST
  const handleSendMessage = async () => {
    if (!textInput.trim()) return;

    setError(null);

    try {
      const accessToken = user?.access_token || Cookies.get("access_token");
      if (!accessToken) throw new Error("No access token");

      const res = await fetch(API_ENDPOINTS.MESSAGES(otherUserId), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "x-user-id": user.id,
        },
        body: JSON.stringify({ text: textInput }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const newMessage = await res.json();
      setMessages((prev) => [...prev, newMessage]);
      setTextInput("");
    } catch (err) {
      console.error(err);
      setError(err.message || "Error sending message");
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  if (loading) return <div className="chat-app">Loading...</div>;
  if (error) return <div className="chat-app">Error: {error}</div>;

  return (
    <div className="chat-app">
      <div className="chat-header">
        <button className="go-back" onClick={handleBackClick}>
          <BackArrow className="icon-style" />
        </button>
        <Pfp className="pfp" />
        <span className="username">Chat with {otherUserId}</span>
      </div>

      <div className="chat-body">
        {messages.map((msg) => (
          <ChatText
            key={msg.id}
            text={msg.text}
            timestamp={msg.created_at}
            variant={msg.sender_id === user.id ? "sender" : "receiver"}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>


      <div className="chat-input">
        <input
          type="text"
          placeholder="Type here..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <button onClick={handleSendMessage}>
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
