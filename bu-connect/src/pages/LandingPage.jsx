import React from 'https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js';
import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <h1>Bangladesh University Student Management System</h1>
        <p>Welcome to a modern student experience!</p>
      </header>
      <main className="main-content">
        <div className="background-vector">
          <div className="building"></div>
          <div className="trees"></div>
          <div className="students"></div>
        </div>
        <div className="overlay-text">
          <h2>Manage Your Academic Journey</h2>
          <button className="get-started">Get Started</button>
        </div>
      </main>
    </div>
  );
};

ReactDOM.render(<LandingPage />, document.getElementById('root'));