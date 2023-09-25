import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!isOpen);
  };

  return (
    
        <div className='main'>
          <nav className={`sidebar`}>
            <div className="menu-items">
              <ul className="nav-links">
                <li>
                  <Link className='link-text' to="/adminDashboard">
                    <span className='link-name'>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link className='link-text' to="/adminPolicies">
                    <span className='link-name'>Policies</span>
                  </Link>
                </li>
                <li>
                  <Link className='link-text' to="/adminDocument">
                    <span className='link-name'>Document</span>
                  </Link>
                </li>
                <li>
                  <Link className='link-text' to="/adminClaims">
                    <span className='link-name'>Claims</span>
                  </Link>
                </li>
                <li>
                  <Link className='link-text' to="/adminCustomer">
                    <span className='link-name'>Customer</span>
                  </Link>
                </li>
                <li>
                  <Link className='link-text' to="/adminHelp">
                    <span className='link-name'>Help</span>
                  </Link>
                </li>
              </ul>
              <ul className="logout-mod">
                <li>
                  <Link className='link-text-logout' to="/">
                    <span className="link-name">Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
};

export default Sidebar;