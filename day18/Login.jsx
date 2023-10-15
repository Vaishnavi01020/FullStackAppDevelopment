import * as React from 'react'
import '../assets/css/loginAndSignUp.css'
import './SignUp'
import { Link } from 'react-router-dom';
import Capture from '../assets/images/Capture.PNG';
import {BsFillPersonFill} from 'react-icons/bs'
import { loginSer } from './services/Api'
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Login=()=>{
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [isFlipped, setIsFlipped] = useState(false);
    const flipForm = () => {
        setIsFlipped(!isFlipped);
    };
    const[loginFormData,setLoginFormData]=React.useState({
        email:"",
        password:""
    })

    const handleLoginFormChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setLoginFormData({
          ...loginFormData,
          [name]: value,
        });
      };
      const mystyle={
        backgroundImage:`url('${Capture}')`,
        height:'cover',
        width:'50%',
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
    const submitForm = async(e) => {
        e.preventDefault();
        const res = await loginSer(loginFormData)
        dispatch(
            Login({
              email: loginFormData.email,
              password: loginFormData.password,
            })
          );
        console.log(loginFormData);
        if((res.data.role) === 'ADMIN'){
            // alert("Admin")
            navigate("/AdminDashboard")
        }
        else if((res.data.role) === "CUSTOMER"){
            // alert("CUSTOMER")
            navigate("/asset")
        }

    }

    return(
        <div style={mystyle}>
        <div className='loginAndSignUpPage'
>
<div className={`forms-container ${isFlipped ? 'flipped' : ''}`}>
            
<div className='form-box login' style={{left:'180%',bottom:'10%'}}>
                <h1>Login</h1>
                <BsFillPersonFill className='user-icon'></BsFillPersonFill>
                <form onSubmit={submitForm} className='loginForm'>
                    <div className='username'>
                        
                        <input type="email" name="email" id="username" placeholder='email' onChange={handleLoginFormChange}/>
                    </div>
                    <div className='password'>
                        <input type="password" name="password" id="password" placeholder="password" onChange={handleLoginFormChange}/>
                    </div>
                    <div className='loginButton'>
                        <button type="login-button">Login</button>
                    </div>    
                    <Link to="SignUp" onClick={flipForm} className='linkText'>If you don't have an account? Sign Up</Link>                 
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Login;