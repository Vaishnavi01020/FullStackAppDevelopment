import React from 'react';
import '../Assets/css/Footer.css';
const Footer = () => {
  return (
    <footer style={footerStyles}>
  <div style={containerStyles}>
    <div className="footer-content">
      <div className="footer-section" style={{marginTop:'90px'}}>
        
        <ul>
          <li><a href="#" style={{color:"white"}}>Dashboard</a></li>
         
          
        </ul>
      </div>
      <div className="footer-section" style={{marginTop:'90px'}}>
        
        <ul>
        
          <li><a href="#" style={{color:"white"}}>Users</a></li>
          
        </ul>
      </div>
      <div className="footer-section" style={{marginTop:'90px'}}>
        
        <ul>
         
          
          <li><a href="#" style={{color:"white"}}>Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section" style={{marginTop:'90px'}}>
        
        <ul>
          <li><a href="#" style={{color:"white"}}>Settings</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  );
};

const footerStyles = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  position: 'fixed', 
  bottom: '0', 
  width: '100%',
  display:'flex',
  left:0,
  rigth:0,
};

const containerStyles = {
  maxWidth: '2000px',
  margin: '0 auto',
  marginBottom:'-60px',
  marginTop:'-100px',
  
};

export default Footer;
