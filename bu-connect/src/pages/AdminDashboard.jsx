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

      {/* Middle Section */}
      <main className="MiddleSection">
        <div className="Menu">
          <div className="MenuItem"><FaChartBar /> Overview</div>
          <div className="MenuItem"><FaUsers /> User Management</div>
          <div className="MenuItem"><FaBook /> Course Management</div>
          <div className="MenuItem"><FaChalkboardTeacher /> Assign Roles</div>
          <div className="MenuItem"><FaBell /> Notifications</div>
        </div>
        <div className="Content">
          <div className="Totalnosection">
            <div className="Frame8">
              <div className="Icon"><FaUsers size={46} /></div>
              <div className="TotalStudent">Total Students</div>
              <div className="StatValue">{demoStats.totalStudents}</div>
            </div>
            <div className="Frame9">
              <div className="Icon"><FaChalkboardTeacher size={46} /></div>
              <div className="TotalStudent">Total Teachers</div>
              <div className="StatValue">{demoStats.totalTeachers}</div>
            </div>
            <div className="Frame10">
              <div className="Icon"><FaBook size={46} /></div>
              <div className="TotalStudent">Total Courses</div>
              <div className="StatValue">{demoStats.totalCourses}</div>
            </div>
          </div>
          <div className="InnerMiddle">
            <div className="Frame11">
              <div className="Frame13">
                <div className="EventCalender">
                  <FaCalendarAlt style={{ marginRight: 8 }} /> Event Calendar
                </div>
                <div className="CalendarContent">
                  Upcoming events will be displayed here.
                </div>
              </div>
              <div className="Frame14">
                <div className="DepartmentPerformance">
                  <FaTrophy style={{ marginRight: 8 }} /> Department Performance
                </div>
                <div className="PerformanceContent">
                  Performance chart or data for departments goes here.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>This is an open source project by Bangladesh University students.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;