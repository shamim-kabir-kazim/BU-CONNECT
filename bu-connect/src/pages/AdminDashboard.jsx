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
            <FaSignOutAlt className="admin-header-icon" title="Logout" style={{ marginLeft: "10px" }} />
          </nav>
        </div>
      </header>


      {/* Footer */}
      <footer className="footer">
        <p>This is an open source project by Bangladesh University students.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;