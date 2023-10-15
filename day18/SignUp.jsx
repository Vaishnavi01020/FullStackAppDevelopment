import * as React from 'react'
import '../assets/css/loginAndSignUp.css'
import Capture from '../assets/images/Capture.PNG';
import {BsFillPersonFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import  { useState } from 'react';
const SignUp=()=>{
    const [isFlipped, setIsFlipped] = useState(false);
    const[formData,setFormData]=React.useState({
        email:"",
        username:"",
        password:"",
        role:"customer"
    })

    const handleChange=(e)=>{
        const [name,value]=[e.target.name,e.target.value];
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData);
    }
   // const [isFlipped, setIsFlipped] = useState(false);
    const flipForm = () => {
        setIsFlipped(!isFlipped);
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

    return(
        <div style={mystyle}>
        <div className='loginAndSignUpPage'
>
<div className={`forms-container ${isFlipped ? 'flipped' : ''}`}>
            
<div className='form-box login' style={{left:'180%',bottom:'10%'}}>
                <h1>SignUp</h1>
                <BsFillPersonFill className='user-icon'></BsFillPersonFill>
                <form onSubmit={submitForm} className='signUpForm'>
                    <div className='email'>
                        <input type='email' name='email' id='email' placeholder='email' onChange={handleChange}></input>
                    </div>
                    <div className='username'>
                        
                        <input type="text" name="username" id="username" placeholder='username' onChange={handleChange}/>
                    </div>
                    <div className='password'>
                        <input type="password" name="password" id="password" placeholder="password" onChange={handleChange}/>
                    </div>
                    <div className='signUpButton'>
                        <button type="login-button">SignUp</button>
                    </div>
                    <Link to="/" onClick={flipForm} className='linkText'>If you have an account? Login</Link>
                </form>
            </div>
            </div>
        </div>
        </div>
    )
}

export default SignUp;