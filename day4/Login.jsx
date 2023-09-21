import React, { useState } from 'react';
import Footer from './Footer';
import '../Assets/css/Login.css'
import '../Assets/css/SignUp.css'

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <>
    
      <div class="login-container">
      <h2>Login</h2>
      <form className='login-form'onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='username'>Username:</label>
          <input className='h' style={{marginBottom:"30px"}}
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlfor='password'>Password:</label>
          <input  className='h' style={{marginBottom:"50px" }}
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" style={{marginBottom:"50px",marginLeft:"250px"}}>Submit</button>
      </form>
      </div>

      <Footer></Footer>  
    </>
    
  );
}

export default Login;
