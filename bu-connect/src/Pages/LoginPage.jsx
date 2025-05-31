import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Optional: for your styles

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your login logic here
    // On success: navigate("/dashboard");
  };

  return (
    <div className="login-bg">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In to BU Connect</h2>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="primary-btn" type="submit">Sign In</button>
        <p>
          Don&apos;t have an account?{" "}
          <span className="link-text" onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;