import React, { useState } from 'react';
import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';

const ROLES = [
  { value: 'student', label: 'Student' },
  { value: 'faculty', label: 'Faculty' },
  { value: 'admin', label: 'Admin' },
  { value: 'staff', label: 'Staff' },
];

function SignUpPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [form, setForm] = useState({
    id: '',
    edumail: '',
    // Additional fields below
    name: '',
    department: '',
    // You can add more per role as needed
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Step 1: Role selection
  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setError('');
  };

  // Continue to step 2
  const handleContinue = () => {
    if (!role) {
      setError('Please select a role to continue.');
      return;
    }
    setStep(2);
    setError('');
  };

  // Submit form (you can implement backend logic here)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.edumail) {
      setError('ID and EduMail are required.');
      return;
    }
    // Add more validation per role if needed
    setError('');
    // TODO: Send signup data to backend
    alert(`Signed up as ${role}! (implement backend)`);
    // Optionally redirect
    // navigate('/login');
  };

  // Helper: Show fields based on role
  const renderRoleFields = () => {
    switch (role) {
      case 'student':
        return (
          <>
            <div className="sign-form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
            </div>
            <div className="sign-form-group">
              <label htmlFor="department">Department</label>
              <input type="text" id="department" name="department" value={form.department} onChange={handleChange} placeholder="Enter your department" required />
            </div>
          </>
        );
      case 'faculty':
        return (
          <>
            <div className="sign-form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
            </div>
            <div className="sign-form-group">
              <label htmlFor="department">Department</label>
              <input type="text" id="department" name="department" value={form.department} onChange={handleChange} placeholder="Enter your department" required />
            </div>
          </>
        );
      case 'admin':
        return (
          <>
            <div className="sign-form-group">
              <label htmlFor="name">Admin Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
            </div>
          </>
        );
      case 'staff':
        return (
          <>
            <div className="sign-form-group">
              <label htmlFor="name">Staff Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
            </div>
            <div className="sign-form-group">
              <label htmlFor="department">Office/Department</label>
              <input type="text" id="department" name="department" value={form.department} onChange={handleChange} placeholder="Enter your office or department" required />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="sign-signup-container">
      <header className="sign-header">
        <div className="sign-header-content">
          <div className="sign-header-left">
            <img
              src="https://i.postimg.cc/cLbWyd3Q/channels4_profile-removebg-preview_upscaled.png"
              alt="BU Logo"
              className="sign-logo"
            />
            <span className="sign-university-name">Bangladesh University</span>
          </div>
          <div className="sign-header-right">
            <button className="sign-btn sign-login-btn" type="button" onClick={() => navigate('/login')}>
              Sign In
            </button>
          </div>
        </div>
      </header>
      <main className="sign-signup-main">
        <div className="sign-signup-card">
          {step === 1 && (
            <>
              <h2 className="sign-signup-title">Sign Up for BU Connect</h2>
              <div className="sign-role-select">
                <p className="sign-role-select-label">Choose your role:</p>
                <div className="sign-role-options">
                  {ROLES.map((r) => (
                    <button
                      type="button"
                      key={r.value}
                      className={`sign-role-btn${role === r.value ? ' selected' : ''}`}
                      onClick={() => handleRoleSelect(r.value)}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
                {error && <div className="sign-signup-error">{error}</div>}
                <button className="sign-btn sign-continue-btn" type="button" onClick={handleContinue}>
                  Continue
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <form className="sign-signup-form" onSubmit={handleSubmit} autoComplete="on">
              <h2 className="sign-signup-title">Sign Up as {ROLES.find(r => r.value === role)?.label}</h2>
              <div className="sign-form-group">
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={form.id}
                  onChange={handleChange}
                  placeholder="Enter your university ID"
                  autoComplete="username"
                  required
                />
              </div>
              <div className="sign-form-group">
                <label htmlFor="edumail">EduMail</label>
                <input
                  type="email"
                  id="edumail"
                  name="edumail"
                  value={form.edumail}
                  onChange={handleChange}
                  placeholder="Enter your university email"
                  autoComplete="email"
                  required
                />
              </div>
              {renderRoleFields()}
              {error && <div className="sign-signup-error">{error}</div>}
              <button type="submit" className="sign-btn sign-signup-btn">
                Sign Up
              </button>
              <button
                type="button"
                className="sign-link-btn sign-back-btn"
                onClick={() => setStep(1)}
                style={{ marginTop: "1rem" }}
              >
                &larr; Back
              </button>
            </form>
          )}
        </div>
      </main>
      <footer className="sign-footer">
        <p>This is an open source project by Bangladesh University students.</p>
      </footer>
    </div>
  );
}

export default SignUpPage;