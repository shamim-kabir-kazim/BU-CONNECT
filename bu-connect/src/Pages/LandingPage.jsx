import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // Optional: for your styles

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-bg">
      <div className="landing-hero">
        <h1>Welcome to BU Connect</h1>
        <p>
          A modern, role-based student management system for Bangladesh University.<br />
          Simplify your academic and administrative life with a beautiful, intuitive dashboard.
        </p>
        <div className="landing-actions">
          <button className="primary-btn" onClick={() => navigate("/login")}>
            Sign In
          </button>
          <button className="secondary-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;