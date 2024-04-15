import React, { useState, useEffect } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import io from "socket.io-client";
import "./Chat.css";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("previousMessages", (previousMessages) => {
      const formattedMessages = previousMessages.map((message) => ({
        ...message,
        user: message.user || "Unknown User", // handle cases where user is not provided
      }));
      setMessages(formattedMessages.reverse());
    });

    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("previousMessages");
      socket.off("receiveMessage");
    };
  }, []);

  return (
    <div className="container mt-5" style={{ position: 'relative' }}>
      {" "}
      {/* Bootstrap container class */}
      <div className="row">
        <div>
          <div
            className="card"
            style={{ borderWidth: "0", backgroundColor: "#EDF1F5" }}
          >
            {/* <div className="card-body" > */}
            <div className="">
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  message={message}
                  style={{ backgroundColor: "red" }}
                />
              ))}
            </div>
            <div style={{display:"flex", justifyContent:"flex-end", position: "fixed", bottom: 0, left: 0, right: 0 }}>
              <ChatInput socket={socket} />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
