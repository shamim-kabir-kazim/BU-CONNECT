import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://i.postimg.cc/cLbWyd3Q/channels4_profile-removebg-preview_upscaled.png"
            alt="Bangladesh University Logo"
            className="uni-logo"
          />
          <h1 className="university-name">Bangladesh University</h1>

        </div>
        <div className="nav-buttons">
          <button className="btn login-btn">Sign In</button>
          <button className="btn signup-btn">Sign Up</button>
        </div>
      </nav>

      <main className="main-content">
        <h1 className="main-title">
          Welcome to 
          <span className="software-name"> BU CONNECT</span>
        </h1>
        <p className="main-subtitle">
          Your all-in-one university management system.
        </p>
        <button className="btn get-started-btn">Get Started</button>
<section className="features">
  <h2 className="features-title">Features</h2>
  <div className="features-grid">
    <div className="feature-box gradient1">
      📚<span>Manage Courses and Schedules</span>
    </div>
    <div className="feature-box gradient2">
      👩‍🎓<span>Student & Faculty Profiles</span>
    </div>
    <div className="feature-box gradient3">
      📝<span>Attendance and Grades Tracking</span>
    </div>
    <div className="feature-box gradient4">
      📢<span>Real-time Notifications</span>
    </div>

  </div>
</section>


      </main>
<footer className="footer">
  <p>This is an open source project by Bangladesh University students.</p>
</footer>


    </div>
  );
}
