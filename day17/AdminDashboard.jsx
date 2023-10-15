import React, { useState } from 'react';
import './AdminHeader.css';
import AdminSideBar from './AdminSideBar';
import Hamburger from 'hamburger-react';
//import UserContainer from './UserContainer';
import Dashmain from './dashmain';
import AdminHeader from './AdminHeader';
import Footer from '../Footer'
const AdminDashboard = () => {
  const [isOpen, setOpen] = useState(false);

  const closeSidebar = () => {
    setOpen(false);
  }

  return (
    <div className="admin-dashboard">
      <AdminHeader/>
      <div className="admin-header">
       </div>
      <Dashmain />
      <Footer/>
    </div>
  );
};

export default AdminDashboard;
