import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder login logic
    if (!form.email || !form.password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    // TODO: connect to backend authentication
    alert('Login submitted! (implement backend)');
  };

  return (
    <div className="login-container">
      <header className="header">
        <div className="header-left">
          <img
            src="https://i.postimg.cc/cLbWyd3Q/channels4_profile-removebg-preview_upscaled.png"
            alt="BU Logo"
            className="logo"
          />
          <span className="university-name">Bangladesh University</span>
        </div>
      </header>

      <main className="login-main">
        <div className="login-card">
          <h2 className="login-title">Sign In to BU Connect</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your university email"
                autoComplete="username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>
            {error && <div className="login-error">{error}</div>}
            <button type="submit" className="btn login-btn">
              Sign In
            </button>
          </form>
          <div className="signup-link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>This is an open source project by Bangladesh University students.</p>
      </footer>
    </div>
  );
}

export default LoginPage;