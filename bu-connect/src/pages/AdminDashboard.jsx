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
} from "react-icons/fa";
import AdminContent from "./AdminContent";

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
        {/* Modern Left Side Menu */}
        <aside
          className="left-menu"
          style={{
            width: "220px",
            
            color: "#fff",
            padding: "32px 0 32px 0",
            boxSizing: "border-box",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: "10px",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {menuOptions.map(({ icon, label }, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0 16px 16px 16px",
                  cursor: "pointer",
                  padding: "5px 5px",
                  borderRadius: "10px",
                
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  letterSpacing: '0.01em',
                  transition: "background 0.17s, color 0.17s",
                  boxShadow: "0 2px 10px rgba(0, 173, 181, 0.07)",
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = "#00adb540";
                  e.currentTarget.style.color = "#00fff5";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = "none";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                <span style={{ marginRight: "14px", fontSize: "22px" }}>{icon}</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Side Content */}
        <section
          className="right-content"
          style={{
            flex: 1,
            backgroundColor: "#f4f4f4",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <AdminContent />
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