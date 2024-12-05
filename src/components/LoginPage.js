import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { email, password });
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log("Response:", response);
      alert("Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="main-i">
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="/signup" className="link">
            Sign up here
          </a>.
        </p>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
