import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './SignupPage.css';  // Import the CSS file

const SignupPage = () => {
  const [name, setName] = useState(""); // New state for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState(""); // New state for phone number
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Post the new credentials to the backend
      const response = await axios.post("http://localhost:5000/api/signup", {
        name, // Include name
        email,
        password,
        phone, // Include phone
      });
      alert("Signup Successful!");
      navigate("/");
    } catch (err) {
      setError("Signup failed. Try again later.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {error && <p>{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/">Login here</a>.
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
