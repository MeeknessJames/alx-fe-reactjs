import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("User Registered:", { username, email, password });
    alert(`Registration successful for ${username}!`);

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Controlled Registration Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
