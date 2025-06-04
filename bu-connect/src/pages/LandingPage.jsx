import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bxolanding-container">
      <header className="bxoheader">
        <div className="bxoheader-content">
          <div className="bxoheader-left">
            <img
              src="https://i.postimg.cc/cLbWyd3Q/channels4_profile-removebg-preview_upscaled.png"
              alt="BU Logo"
              className="bxologo"
            />
            <span className="bxouniversity-name">Bangladesh University</span>
          </div>
          <div className="bxoheader-right">
            <button className="bxobtn bxologin" onClick={() => navigate('/login')}>Sign In</button>
            {/* Sign Up button removed */}
          </div>
        </div>
      </header>

      <main className="bxomain-content">
        <h1 className="bxomain-heading">
          <span className="bxowelcome-text">WELCOME TO</span> <span className="bxobu-text">BU CONNECT</span>
        </h1>
        <p className="bxotagline">Your all in one university management system</p>
        <button className="bxobtn bxoget-started" onClick={() => navigate('/login')}>Get Started</button>
        <h3 className="bxosection-title">Features</h3>
        <div className="bxofeatures">
          <div className="bxofeature-box bxogradient1">
            <img src="https://img.icons8.com/color/48/student-center.png" alt="Student Dashboard" className="bxofeature-icon" />
            <span>Manage Courses and Schedules</span>
          </div>
          <div className="bxofeature-box bxogradient2">
            <img src="https://img.icons8.com/color/48/teacher.png" alt="Faculty Management" className="bxofeature-icon" />
            <span>Student and Faculty Profiles</span>
          </div>
          <div className="bxofeature-box bxogradient3">
            <img src="https://img.icons8.com/color/48/calendar.png" alt="Course Scheduling" className="bxofeature-icon" />
            <span>Attendance and Grade Tracking</span>
          </div>
          <div className="bxofeature-box bxogradient4">
            <img src="https://img.icons8.com/color/48/test-passed.png" alt="Exam Results" className="bxofeature-icon" />
            <span>Real Time Notification</span>
          </div>
        </div>
      </main>
      <footer className="bxofooter">
        <p>This is an open source project by Bangladesh University students.</p>
      </footer>
    </div>
  );
}

export default LandingPage; // bxo before all class name
