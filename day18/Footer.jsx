import React from 'react';
import '../assets/css/Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPhone, FaLinkedin } from 'react-icons/fa';

const Footer = ({ aboutLink = { name: "About ArtNest", path: "/about-us" }, 
                 legalLinks = [
                    { name: 'Privacy Policy', path: '/privacy-policy' },
                    { name: 'Terms and Conditions', path: '/terms-and-conditions' },
                    { name: 'FAQ', path: '/faq' }
                 ],
                 socialLinks = [
                    { icon: 'instagram', path: '#' },
                    { icon: 'phone', path: 'tel:1234567890' },
                    { icon: 'linkedin', path: '#' }
                 ] ,
                 term={name:"Privacy Policy",path:'/privacy-policy'},
                 privacy = { name: "Terms and Conditions", path: "/terms-and-conditions" }, 
                 faq = { name: "FAQ", path: "/faq" }, 
               }) => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footer-links' >
          <ul>
          <div className='footer-content'>
            <li>
            <Link to={aboutLink.path} className="footer-link">
            {aboutLink.name}
          </Link>
            </li>
            </div>
            <div className='footer-content' style={{marginLeft:"150px"}}>
            <li>
            <Link to={term.path} className="footer-link">
            {term.name}
          </Link>
            </li>
            </div>
            <div className='footer-content' style={{marginLeft:"200px"}}>
            <li>
            <Link to={privacy.path} className="footer-link">
            {privacy.name}
          </Link>
            </li>
            </div>
            <div className='footer-content' style={{marginLeft:"250px"}}>
            <li>
            <Link to={faq.path} className="footer-link">
            {faq.name}
          </Link>
            </li>
            </div>
            {/* <div className='footer-content'>
            <li>
            {legalLinks.map(link => (
            <Link key={link.path} to={link.path} className="footer-link">{link.name}</Link>
          ))}
            </li>
            </div> */}
           
            
          </ul>
        </div>
        <div className='footer-content' style={{marginTop:'10px'}}>
        <div className='footer-social-media'>
        {socialLinks.map(link => (
              <a key={link.icon} href={link.path} className="footer-icon-link">
                {link.icon === "instagram" && <FaInstagram className="footer-icon" style={{marginLeft:"50px"}}/>}
                {link.icon === "phone" && <FaPhone className="footer-icon" />}
                {link.icon === "linkedin" && <FaLinkedin className="footer-icon" />}
              </a>
            ))}
       
        </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;

