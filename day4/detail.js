import React from 'react';
import { useNavigate } from 'react-router';
import './details.css';


const Detail = () => {

  const nav = useNavigate();

  return (
    <div className='detail-body'>
      <main class="detail-main-container">
        <div class="detail-main-title">
          <h2 onClick={()=>nav('/')}>DROPOUT DETECT</h2>
          <div className="navbar">
          <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Report</a></li>
              <li><a href="register/institutions" className="landinglogin-button">Register School</a></li>
            </ul>
          </div>

         </div>

        <div class="detail-main-cards">

          <div class="card">
            <div class="card-inner">
              <h2>TOTAL VIEWS  :  537</h2>
            </div>
              
            
          </div>

          <div class="card">
            <div class="card-inner">
              <h1>NEW ARTIST : 217</h1>
             
            </div>
          </div>

          <div class="card">
            <div class="card-inner">
              <h1>DOWNLOADS : 320</h1>
             
            </div>
           
          </div>

          <div class="card">
            <div class="card-inner">
              <h1>COLLABORATION PROJECT : 25</h1>
            
            </div>
           
          </div>

        </div>

        
      </main>
    </div>
  );
};

export default Detail;