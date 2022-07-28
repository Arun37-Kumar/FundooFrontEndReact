import React from 'react';
import './signin.css';
import logo from '../../assets/logo.PNG';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
// Regex definition
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin() {
  const [signinObj, setSigninObj] = useState({ email: "", password: "" })
  const [regexObj, setRegexObj] = React.useState({ emailError: false, passwordError: false, emailHelper: "", passwordHelper: "" });

  const getEmail = (event) => {
    setSigninObj((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const getPassword = (event) => {
    setSigninObj((prevState) => ({
      ...prevState, password: event.target.value,
    }));
  };

  const submit = () => {
    // console.log("Done Submit");
    let emailTest = emailRegex.test(signinObj.email);
    let passwordTest = passwordRegex.test(signinObj.password);

    if (emailTest === true) {
      setRegexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
    }
    else if (emailTest === false) {
      setRegexObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter correct email!" }))
    }

    if (passwordTest === true) {
      setRegexObj((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
    }
    else if (passwordTest === false) {
      setRegexObj((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter correct Password!" }))
    }

    if (emailTest === true && passwordTest === true) {
        console.log("Signin Successfull")
    }


  }


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
            <TextField error={regexObj.emailBorder} onChange={getEmail} helperText={regexObj.emailHelper} id="outlined-basic" size='small' label="Email" variant="outlined" fullWidth />
          </div>

          {/* 1.5 - Password */}
          <div className='signi-password'>
            <TextField error={regexObj.passwordBorder} onChange={getPassword} helperText={regexObj.passwordHelper} id="outlined-basic" size='small' label="Password" variant="outlined" fullWidth />
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
              <Button variant="contained" size='small' onClick={submit}><span>Next</span></Button>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Signin