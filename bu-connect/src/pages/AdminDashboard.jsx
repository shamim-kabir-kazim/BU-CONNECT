import React from "react";
import "./AdminDashboard.css";
import { FaUsers, FaBook, FaChalkboardTeacher, FaBell, FaCogs, FaChartBar } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2 className="logo">Admin Panel</h2>
        <nav>
          <ul>
            <li><FaUsers /> User Management</li>
            <li><FaBook /> Course Management</li>
            <li><FaChalkboardTeacher /> Assign Roles</li>
            <li><FaChartBar /> Reports</li>
            <li><FaBell /> Notifications</li>
            <li><FaCogs /> Settings</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Welcome, Admin</h1>
          <div className="admin-profile">
            <span className="admin-name">Admin</span>
          </div>
        </header>

        <section className="dashboard-widgets">
          <div className="widget-card">Total Students: 1,200</div>
          <div className="widget-card">Total Teachers: 75</div>
          <div className="widget-card">Courses: 145</div>
          <div className="widget-card">Notifications Sent: 320</div>
        </section>

        <section className="dashboard-content">
          <h2>System Overview</h2>
          <p>Select an option from the sidebar to begin managing the system.</p>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
