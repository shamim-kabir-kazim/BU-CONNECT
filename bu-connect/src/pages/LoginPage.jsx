import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [form, setForm] = useState({ id: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Demo admin credentials
  const demoAdmin = {
    id: '2023110650',
    password: 'password'
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.password) {
      setError('Please enter both ID and password.');
      return;
    }

    // Demo admin login check
    if (form.id === demoAdmin.id && form.password === demoAdmin.password) {
      setError('');
      navigate('/admin-dashboard');
      return;
    }

    setError('Invalid ID or password.');
    // TODO: connect to backend authentication
    // alert('Login submitted! (implement backend)');
  };

  return (
    <div className="log-login-container">
      <header className="log-header">
        <div className="log-header-content">
          <div className="log-header-left">
            <img
              src="https://i.postimg.cc/cLbWyd3Q/channels4_profile-removebg-preview_upscaled.png"
              alt="BU Logo"
              className="log-logo"
            />
            <span className="log-university-name">Bangladesh University</span>
          </div>
          {/* Sign Up button removed from login page header */}
        </div>
      </header>

      <main className="log-login-main">
        <div className="log-login-card">
          <h2 className="log-login-title">BU CONNECT</h2>
          <form className="log-login-form" onSubmit={handleSubmit} autoComplete="on">
            <div className="log-form-group">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                id="id"
                name="id"
                value={form.id}
                onChange={handleChange}
                placeholder="Enter your ID"
                required
              />
            </div>
            <div className="log-form-group">
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
            {error && <div className="log-login-error">{error}</div>}
            <button type="submit" className="log-btn log-login-btn">
              Sign In
            </button>
          </form>
          <div className="log-login-links">
            <button
              className="log-link-btn"
              type="button"
              onClick={() => navigate('/forgot-password')}
            >
              Forgot password?
            </button>
          </div>
       
        </div>
      </main>

      <footer className="log-footer">
        <p>This is an open source project by Bangladesh University students.</p>
      </footer>
    </div>
  );
}

export default LoginPage;