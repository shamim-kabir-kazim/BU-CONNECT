import React, { useState } from 'react';
import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';

const ROLES = [
  { value: 'student', label: 'Student' },
  { value: 'faculty', label: 'Teacher' },
  { value: 'coordinator', label: 'Coordinator' }
];

const DEPARTMENTS = [
  'CSE', 'EEE', 'BBA', 'English', 'Law', 'Civil', 'Textile', 'Pharmacy', 'Architecture', 'Other'
];

function SignUpPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [form, setForm] = useState({
    id: '',
    edumail: '',
    name: '',
    department: '',
    batch: '',
    section: '',
    designation: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setError('');
  };

  const handleContinue = () => {
    if (!role) {
      setError('Please select a role to continue.');
      return;
    }
    setStep(2);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.edumail) {
      setError('ID and EduMail are required.');
      return;
    }
    setError('');
    alert(`Signed up as ${role}! (implement backend)`);
    // Optionally: navigate('/login');
  };

  // Render fields for the selected role
  const renderRoleFields = () => {
    switch (role) {
      case 'student':
        return (
          <>
            <div className="sign-form-row">
              <div className="sign-form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="sign-form-group">
                <label htmlFor="department">Department</label>
                <select
                  id="department"
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select department</option>
                  {DEPARTMENTS.map(dep => (
                    <option value={dep} key={dep}>{dep}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sign-form-row">
              <div className="sign-form-group">
                <label htmlFor="batch">Batch</label>
                <input
                  type="text"
                  id="batch"
                  name="batch"
                  value={form.batch}
                  onChange={handleChange}
                  placeholder="Enter your batch (e.g. 45)"
                  required
                />
              </div>
              <div className="sign-form-group">
                <label htmlFor="section">Section</label>
                <input
                  type="text"
                  id="section"
                  name="section"
                  value={form.section}
                  onChange={handleChange}
                  placeholder="Enter your section (e.g. A)"
                  required
                />
              </div>
            </div>
          </>
        );
      case 'faculty':
      case 'coordinator':
        return (
          <>
            <div className="sign-form-row">
              <div className="sign-form-group">
                <label htmlFor="name">{role === 'coordinator' ? 'Coordinator' : 'Teacher'} Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={`Enter your name`}
                  required
                />
              </div>
              <div className="sign-form-group">
                <label htmlFor="department">Department</label>
                <select
                  id="department"
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select department</option>
                  {DEPARTMENTS.map(dep => (
                    <option value={dep} key={dep}>{dep}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sign-form-row">
              <div className="sign-form-group">
                <label htmlFor="designation">Designation</label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                  placeholder="Enter your designation"
                  required
                />
              </div>
              <div className="sign-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
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
      <main className="sign-signup-main sign-signup-main-grid">
        <div
          className={
            "sign-signup-card sign-signup-card-large" +
            (step === 2 ? " in-form-step" : "")
          }
        >
          {step === 1 && (
            <>
              <h2 className="sign-signup-title">Sign Up</h2>
              <div className="sign-grad">
                <p className="sign-role-select-label">Select your role</p>
                <div className="sign-role-underline" />
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
              </div>
              {error && <div className="sign-signup-error">{error}</div>}
              <div className="sign-role-actions">
                <button
                  className="sign-btn sign-continue-btn"
                  type="button"
                  onClick={handleContinue}
                  disabled={!role}
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <form className="sign-signup-form" onSubmit={handleSubmit} autoComplete="on">
              <h2 className="sign-signup-title sign-signup-title-form">
                Sign Up as {ROLES.find(r => r.value === role)?.label}
              </h2>
              {/* Row: ID & EduMail */}
              <div className="sign-form-row">
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
              </div>
              {renderRoleFields()}
              {error && <div className="sign-signup-error">{error}</div>}
              <div className="sign-signup-form-actions">
                <button
                  type="button"
                  className="sign-link-btn sign-back-btn"
                  onClick={() => setStep(1)}
                  aria-label="Back"
                >
                  {/* SVG left arrow icon */}
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" style={{verticalAlign: 'middle', marginRight: 6}}>
                    <path d="M12.5 16L7.5 10L12.5 4" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back
                </button>
                <button
                  type="submit"
                  className="sign-btn sign-signup-btn"
                >
                  Sign Up
                </button>
              </div>
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