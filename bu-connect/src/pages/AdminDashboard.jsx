import React from "react";
import "./AdminDashboard.css";
import {
  FaUsers,
  FaBook,
  FaChalkboardTeacher,
  FaBell,
  FaCogs,
  FaChartBar,
  FaHome,
  FaEnvelope,
  FaSignOutAlt,
  FaUserCircle,
  FaCalendarAlt,
  FaTrophy,
} from "react-icons/fa";

const demoStats = {
  totalStudents: 1200,
  totalTeachers: 75,
  totalCourses: 145,
};

const menuOptions = [
  { icon: <FaChartBar />, label: "Overview" },
  { icon: <FaUsers />, label: "User Management" },
  { icon: <FaBook />, label: "Course Management" },
  { icon: <FaChalkboardTeacher />, label: "Assign Roles" },
  { icon: <FaBell />, label: "Notifications" }
];

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="admin-header landing-style-header">
        <div className="admin-header-content">
          <div className="admin-header-left">
            <img
              src="https://i.postimg.cc/cLbWyd3Q/channels4_profile-removebg-preview_upscaled.png"
              alt="BU Logo"
              className="admin-logo"
            />
            <span className="admin-university-name">BU CONNECT</span>
          </div>
          <nav className="admin-header-nav">
            <FaHome className="admin-header-icon" title="Home" />
            <FaEnvelope className="admin-header-icon" title="Messages" />
            <FaBell className="admin-header-icon" title="Notifications" />
            <FaCogs className="admin-header-icon" title="Settings" />
            <span className="admin-header-divider" />
            <FaUserCircle className="admin-header-account" title="Account" />
            <FaSignOutAlt
              className="admin-header-icon"
              title="Logout"
              style={{ marginLeft: "10px" }}
            />
          </nav>
        </div>
      </header>

      {/* Middle Section */}
      <div className="middle-section" style={{ display: "flex", height: "calc(100vh - 120px)" }}>
        {/* Left Side Menu */}
        <aside
          className="left-menu"
          style={{
            width: "220px",
            backgroundColor: "#2f3e46",
            color: "white",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {menuOptions.map(({ icon, label }, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
              >
                <span style={{ marginRight: "10px", fontSize: "18px" }}>{icon}</span>
                <span style={{ fontSize: "16px" }}>{label}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Side Content (Empty for now) */}
        <section
          className="right-content"
          style={{
            flex: 1,
            backgroundColor: "#f4f4f4",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>This is an open source project by Bangladesh University students.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
