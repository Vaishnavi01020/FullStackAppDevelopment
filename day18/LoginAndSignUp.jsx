import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Login } from './Redux/UserSlice';
import { BsFillPersonFill } from 'react-icons/bs';
import { useUser } from './context/UserContext';
import { Authlogin } from '../Api';
import Capture from '../assets/images/Capture.PNG';
import '../assets/css/loginAndSignUp.css';
import Header from './Header';
import Footer from './Footer';
const LoginAndSignUp = () => {
  const navigate = useNavigate();
  const { login: userLogin } = useUser();
  const [isFlipped, setIsFlipped] = useState(false);
  const dispatch = useDispatch();

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const [signUpFormData, setSignUpFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };
  const mystyle={
    backgroundImage:`url('${Capture}')`,
    height:'cover',
    width:'80%',
    objectFit: 'cover', // Scale the image to cover the entire container
objectPosition: 'center',
//backgroundSize:'cover',
     marginTop:'1%',
    // marginRight:'100px',
    //backgroundSize:'auto 100%',
    backgroundRepeat: 'no-repeat',
marginLeft: '10vh', // Add this line to move it towards the right
marginRight: '0',
//top:'100%'
};

  const handleSignUpFormChange = (e) => {
    const { name, value } = e.target;
    setSignUpFormData({
      ...signUpFormData,
      [name]: value,
    });
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();
    
    if (!loginFormData.email || !loginFormData.password) {
      console.log('Please enter details');
    } else {
      try {
        const res = await Authlogin({name:loginFormData.email,pwd:loginFormData.password}).then((response)=>{
            const token=response.data.token;
            localStorage.setItem('token',token);
            sessionStorage.setItem('token',token);
        });
        // console.log('loginFormData.email:', loginFormData.email);
        console.log(res);
        // userLogin(loginFormData.email);
        navigate('/Homepage');
        
        dispatch(
          Login({
            username: loginFormData.email,
            password: loginFormData.password,
          })
        );
      } catch (err) {
        console.error(err);
      }
    }
    if (loginFormData.email.toLowerCase() === 'admin') {
      navigate('/BarChart');
    }
    userLogin();
  };

  const submitSignUpForm = (e) => {
    e.preventDefault();
    console.log(signUpFormData);
  };

  const flipForm = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <Header/>
    <div style={mystyle}>
    <div className="loginAndSignUpPage" style={{bottom:'50%'}}>
      <div className={`forms-container ${isFlipped ? 'flipped' : ''}`}>
        <div className="form-box login" >
          <h1>Login</h1>
          <BsFillPersonFill className="user-icon" />
          <form onSubmit={submitLoginForm} className="loginForm">
            <div className="username">
              <input type="text" name="email" id="username" placeholder="Username" autoComplete="current-username" onChange={handleLoginFormChange}/>
            </div>
            <div className="password">
              <input type="password" name="password" id="password" placeholder="Password" autoComplete="current-password" onChange={handleLoginFormChange} />
            </div>
            <div className="loginButton">
              <button className="login-button" type="submit">
                Login
              </button>
            </div>
            <Link to="#" onClick={flipForm} className="linkText">
              If you don't have an account? Sign Up
            </Link>
          </form>
        </div>
        <div className="form-box signup">
          <h1>Sign Up</h1>
          <BsFillPersonFill className="user-icon" />
          <form onSubmit={submitSignUpForm} className="signUpForm">
            <div className="email">
              <input type="email"  name="email"  id="email"  placeholder="Email" onChange={handleSignUpFormChange}/>
            </div>
            <div className="newUsername">
              <input type="text" name="newUsername" id="newUsername" placeholder="Username" autoComplete="current-username" onChange={handleSignUpFormChange} />
            </div>
            <div className="newPassword">
              <input type="password" name="newPassword"  id="newPassword"  placeholder="Password" autoComplete="current-password" onChange={handleSignUpFormChange}/>
            </div>
            <div className="signUpButton">
              <button className="login-button" type="submit">
                Sign Up
              </button>
            </div>
            <Link to="#" onClick={flipForm} className="linkText">
              If you have an account? Login
            </Link>
          </form>
        </div>
      </div>
    </div>
      <Footer/>
      </div>
    </div>
  );
};

export default LoginAndSignUp;
