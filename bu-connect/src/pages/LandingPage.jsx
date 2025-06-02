import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <img
              src="https://i.postimg.cc/cLbWyd3Q/channels4_profile-removebg-preview_upscaled.png"
              alt="BU Logo"
              className="logo"
            />
            <span className="university-name">Bangladesh University</span>
          </div>
          <div className="header-right">
            <button className="btn login" onClick={() => navigate('/login')}>Sign In</button>
            {/* Sign Up button removed */}
          </div>
        </div>
      </header>

      <main className="main-content">
        <h1 className="main-heading">
          <span className="welcome-text">WELCOME TO</span> <span className="bu-text">BU CONNECT</span>
        </h1>
        <p className="tagline">Your all in one university management system</p>
        <button className="btn get-started" onClick={() => navigate('/login')}>Get Started</button>
        <h3 className="section-title">Features</h3>
        <div className="features">
          <div className="feature-box gradient1">
            <img src="https://img.icons8.com/color/48/student-center.png" alt="Student Dashboard" className="feature-icon" />
            <span>Manage Courses and Schedules</span>
          </div>
          <div className="feature-box gradient2">
            <img src="https://img.icons8.com/color/48/teacher.png" alt="Faculty Management" className="feature-icon" />
            <span>Student and Faculty Profiles</span>
          </div>
          <div className="feature-box gradient3">
            <img src="https://img.icons8.com/color/48/calendar.png" alt="Course Scheduling" className="feature-icon" />
            <span>Attendance and Grade Tracking</span>
          </div>
          <div className="feature-box gradient4">
            <img src="https://img.icons8.com/color/48/test-passed.png" alt="Exam Results" className="feature-icon" />
            <span>Real Time 
                Notification</span>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>This is an open source project by Bangladesh University students.</p>
      </footer>
    </div>
  );
}

export default LandingPage;