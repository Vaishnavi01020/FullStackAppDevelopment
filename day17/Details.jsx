import React from 'react';
import { useNavigate } from 'react-router';
import '../../assets/css/Details.css';
import Header from '../Header';
import Footer from '../Footer';

import AdminHeader from './AdminHeader';
import Footer from '../Footer'
const Detail = () => {

  const nav = useNavigate();

  return (
    <div className='page'>
      <AdminHeader/>
    <div className='detail-body'>
      <main class="detail-main-container">
        <div class="detail-main-title">
         
         </div>
      </main>
    </div>
    <Footer/>
      </div>
  );
};

export default Detail;
