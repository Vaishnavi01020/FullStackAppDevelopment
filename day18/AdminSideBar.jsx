import React from 'react';
import { FaImages, FaBriefcase, FaUsers, FaUserFriends, FaUpload, FaHome } from 'react-icons/fa'; 
import './AdminSideBar.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminSideBar = ({ isOpen }) => {
    const username = useSelector(state => state.user?.user?.username) || "Guest";
    const navigate = useNavigate();  // Using navigate from react-router-dom

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="username-display">
                Welcome, {username}!
            </div>
            <button className="sidebar-button" onClick={() => navigate('/Homepage')}>
                <FaHome className="option-icon" />
                Dashboard
            </button>
            <button className="sidebar-button" onClick={() => navigate('/assets')}>
                <FaImages className="option-icon" />
                Users
            </button>
            <button className="sidebar-button" onClick={() => navigate('/your-works')}>
                <FaBriefcase className="option-icon" />
                Project
            </button>
            <button className="sidebar-button" onClick={() => navigate('/ValueForm')}>
                <FaUpload className="option-icon" />
                Upload
            </button>
            
        </div>
    );
};

export default AdminSideBar;
