import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Chatbox from "./components/Chatbox"; // Import Chatbox component

function App() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLoginPageNavigation = () => {
    navigate("/login"); // Navigate to the LoginPage
  };

  const handleChatboxNavigation = () => {
    navigate("/chatbox"); // Navigate to the Chatbox
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1 className="h2">Askive</h1> {/* Changed to "h2" class for styling */}
          <button
            className="Get-Started"
            role="button"
            onClick={handleLoginPageNavigation}
          >
            Go to Login
          </button>
          <button
            className="Go-To-Chatbox"
            role="button"
            onClick={handleChatboxNavigation}
            style={{ marginLeft: "10px" }} // Add some spacing between buttons
          >
            Go to Chatbox
          </button>
        </p>
      </header>
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/chatbox"
          element={<Chatbox user={{ username: "TestUser" }} />} // Dummy user for testing
        />
      </Routes>
    </Router>
  );
}
