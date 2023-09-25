import React, { useState } from 'react';
import {Link} from "react-router-dom";
import '../Assets/css/Login.css'
import '../Assets/css/SignUp.css'
import Footer from './Footer';
function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission (e.g., make an API request to create the user)
    console.log(formData); // You can replace this with your API call
  };

  return (
    <>
    <div class="login-container">
      <Link to="/"><button type="Login" style={{marginLeft:"350px"}}>Login</button></Link>
      <h2>Sign Up</h2>
      <form className='signup-form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <Link to="/"><button type="submit">Sign Up</button></Link>
      </form>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Signup;