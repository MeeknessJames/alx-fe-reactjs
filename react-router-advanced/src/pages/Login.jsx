import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple fake authentication check
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
      alert("Login successful!");
      navigate("/profile");
    } else {
      alert("Invalid credentials. Try username: admin, password: password");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 10 }}>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
