import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

function App() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLoginPageNavigation = () => {
    navigate("/login"); // Navigate to the LoginPage
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1 className="h2">Askive</h1> {/* Changed to "h2" class for styling */}
          <button className="Get-Started" role="button" onClick={handleLoginPageNavigation}>
            Get Started
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
      </Routes>
    </Router>
  );
}
