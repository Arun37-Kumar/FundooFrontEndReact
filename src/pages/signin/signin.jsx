import React from 'react';
import './signin.css';
import logo from '../../assets/logo.PNG';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';


function Signin() {
  return (
    <>
      {/* 0 - Outer Box */}
      <div className="signin-outer-box">
        {/* 1 - Inner Box {LOGIN FORM} */}
        <div className="signin-inner-box">

          {/* 1.1 - Logo  */}
          <div className='signin-logo'>
            <img src={logo} alt="fundoo" />
          </div>

          {/* 1.2 - Heading */}
          <div className='signin-heading'><h1>Sign in</h1></div>

          {/* 1.3 - Subheading */}
          <div className='signin-subheading'><h2>Use your Google Account</h2></div>

          {/* 1.4 - Email */}
          <div className='signin-email'>
          <TextField id="outlined-basic" size='small' label="Email" variant="outlined" fullWidth />
          </div>

          {/* 1.5 - Password */}
          <div className='signi-password'>
          <TextField id="outlined-basic" size='small' label="Password" variant="outlined" fullWidth />
          </div>

          {/* 1.6 - Forget Mail */}
          <div className='forget-mail'>
          <Button variant="text" size='small'><h3>Forget Mail?</h3></Button>
          </div>

          {/* 1.7 - Text */}
          <div className='signin-text'><span>Not your computer? Use a Private Window to sign in. </span></div>

          {/* 1.8 - Learn More */}
          <div className='signin-learnmore'>
          <a href="https://support.google.com/accounts?p=signin_privatebrowsing&hl=en-GB" size='small'>Learn More</a>
          </div>

          {/* 1.9 - Signin and Login */}
          <div className='signin-create-login'>

            {/* 1.9.1 - Create Account */}
            <div className='create-account'>
            <Button size='small'>Create Account</Button>
            </div>

            {/* 1.9.2 - Login */}
            <div className='login'>
            <Button variant="contained" size='small'><span>Next</span></Button>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Signin