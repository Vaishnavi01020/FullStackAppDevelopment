
import React, { useState } from 'react';
import './AdminHeader.css';
import AdminSideBar from './AdminSideBar';
import Hamburger from 'hamburger-react';
import UserContainer from '../UserContainer';

const AdminHeader = () => {
  const [isOpen, setOpen] = useState(false);
  const closesidebar=()=>{
    setOpen(false);
  }

  return (
    <header className="headerStyles">
      <div className="hamburgerWrapper" onClick={() => setOpen(!isOpen)}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <h1 className="headingStyles">ARTNEST</h1>
      <UserContainer />
      <AdminSideBar isOpen={isOpen} closesidebar={closesidebar}/>
    </header>
  );
};

export default AdminHeader;