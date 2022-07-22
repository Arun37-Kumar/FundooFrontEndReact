import React from 'react'
import './signup.css'
import logo from '../../assets/logo.PNG';
import { Button } from '@mui/material';
import google_accounts from '../../assets/google_account.svg';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function Signup() {
    return (
        <>
            {/* This is the outer most box */}
            <div className="outer-box">

                {/* Inner box inside which the left and right part of the content is put */}
                <div className="inner-box">


                    {/* LEFT BODY - MAIN */}
                    <div className="left-content">

                        {/* 1 - Logo */}
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>

                        {/* 2 - Header */}
                        <div className="header">
                            <h1>Create Your Fundoo Account</h1>
                        </div>

                        {/* 3 - Form for register */}
                        {/* This form contains tags like Name,Email,Password */}
                        <div className="form-content">

                            {/* 3.1 - Name */}
                            <div className="full-name">
                               <div className="first-name"><TextField id="outlined-basic" size='small' label="First Name" variant="outlined" /></div>
                               <div className="last-name"><TextField id="outlined-basic" size='small' label="Last Name" variant="outlined" /></div>
                            </div>

                            {/* 3.2 - Email */}
                            {/* Code update at third line */}
                            <div className="emailid">
                            <TextField id="outlined-basic" size='small' label="Email" variant="outlined" fullWidth />
                            
                                <div className='message'>You can use letters, numbers & periods</div>
                            </div>

                            {/* 3.3 - Button to use the current email */}
                            <div className="current-email">
                            <Button className="textbutton"><span>Use my current email address instead</span></Button>
                            </div>

                            {/* 3.4 - For using Password */}
                            <div className="password-heading">
                                {/* 3.4.1 - Password */}
                                <div className="password">
                                    <div className="original-password">
                                    <TextField id="outlined-basic" size='small' label="Password" variant="outlined" />
                                    </div>
                                    {/* 3.4.2 - Confirm Password */}
                                    <div className="confirm-password">
                                    <TextField id="outlined-basic" size='small' label="Confirm Password" variant="outlined" />
                                    </div>
                                </div>
                                {/* 3.4.2 - Message to show */}
                                <div className="message">Use 8 or more characters with a mix of letters,numbers & symbols</div>
                            </div>

                            {/* 3.5 To show password */}
                            <div className="show-password">
                            <FormControlLabel control={<Checkbox />} label="Show password" />
                            </div>

                            {/* 3.6 - Last Two buttons */}
                            <div className='links'>
                                <Button className='textbutton'><span>Sign in instead</span></Button>
                                <Button className='containedbutton' variant='contained'>Next</Button>
                            </div>

                        </div>
                    </div>


                    {/* RIGHT BODY */}
                    <div className="right-content">
                        {/* 1 - Contains the figure of Register */}
                        <figure className='figure'>
                            {/* 1.1 - Image Show */}
                            <img src={google_accounts} alt="account" width="244px" height="244px" />
                            {/* 1.2 - Caption */}
                            <figcaption className='figcaption'>One account. All of Google working for you.</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;