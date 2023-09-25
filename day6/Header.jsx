import React from 'react';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import Sidebar from './Sidebar';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const headerStyles = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '50px 0',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'fixed', // Make the header fixed
    top: '0', // Stick it to the top
    left: '0',
    padding: '20px 0',
    zIndex: '500', // Add a higher z-index to ensure it's above other elements
  };

  const headingStyles = {
    margin: '0',
    fontSize: '2rem',
  };

  const toggleSidebar = () => {
    setOpen(!isOpen);
  };

  return (
    <header style={headerStyles}>
      <div>
        <h1 style={headingStyles}>ARTNEST</h1>
        <div
          onClick={toggleSidebar}
          style={{
            position: 'absolute',
            display: 'flex',
            top: '20px',
            left: '50px',
          }}
        >
          <Hamburger toggled={isOpen} toggle={toggleSidebar} />
        </div>
        {isOpen && <Sidebar />}
      </div>
    </header>
  );
};

export default Header;