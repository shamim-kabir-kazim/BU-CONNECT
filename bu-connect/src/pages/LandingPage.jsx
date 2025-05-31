import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <h1 className="logo">UniManage</h1>
          <nav>
            <a href="#signin" className="btn">Sign In</a>
            <a href="#signup" className="btn btn-primary">Sign Up</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <h2>Welcome to the Student Management System</h2>
          <p>Manage students, track progress, communicate with faculty, and stay organized — all in one place.</p>
          <div className="buttons">
            <a href="#signin" className="btn">Sign In</a>
            <a href="#signup" className="btn btn-primary">Sign Up</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 University Student Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
