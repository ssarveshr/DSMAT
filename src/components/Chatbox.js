import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./Chatbox.css";

// Connect to the socket.io server (replace with your server URL)
const socket = io("http://localhost:5000");

const Chatbox = ({ user, onLogout }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Listen for incoming messages from other users
  useEffect(() => {
    socket.on("receive_message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  // Send message to the server
  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const msg = { username: user.username, message };
      socket.emit("send_message", msg); // Emit message to the server
      setMessages((prevMessages) => [...prevMessages, msg]); // Add message to local state
      setMessage(""); // Clear the input field
    }
  };

  // Scroll to the bottom whenever a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Live Chat</h3>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.username}: </strong>
            {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
