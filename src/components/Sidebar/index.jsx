import React from 'react';
import { Link } from 'react-router-dom';
import SidebarHeading from '../SidebarHeading';

const Sidebar = () => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="bi bi-airplane-fill" />
        </div>
        <div className="sidebar-brand-text mx-3">Inventory System</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <hr className="sidebar-divider " />
      <SidebarHeading title="Super Admin" />

      <li className="nav-item">
        <Link className="nav-link" to="/su/users">
          <i className="bi bi-speedometer" />
          <span>Management Users</span>
        </Link>
      </li>
      <hr className="sidebar-divider my-0" />

      <hr className="sidebar-divider " />
      <SidebarHeading title="Dashboard" />
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="bi bi-speedometer" />
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <Link className="nav-link" to="/inventory">
          <i className="bi bi-speedometer" />
          <span>Inventory</span>
        </Link>
      </li>

      <hr className="sidebar-divider my-0" />
    </ul>
  );
};

export default Sidebar;
