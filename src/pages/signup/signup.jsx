import React from 'react'
import './signup.css'
import logo from '../../assets/logo.PNG';
import { Button } from '@mui/material';
import google_accounts from '../../assets/google_account.svg';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';

const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signup() {
    // Logic Handle
    const [signUpObj, setSignUpObj] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [signUpRegexObj, setSignUpRegexObj] = useState({
        firstNameBorder: false,
        firstNameHelper: "",
        lastNameBorder: false,
        lastNameHelper: "",
        emailBorder: false,
        emailHelper: "",
        passwordBorder: false,
        passwordHelper: "",
        confirmPasswordBorder: false,
        confirmPasswordHelper: "",
    })

    const getFirstName = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, firstName: event.target.value }));
    }

    const getLastName = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, lastName: event.target.value }));
    }

    const getEmail = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, email: event.target.value }));
    }

    const getPassword = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, password: event.target.value }));
    }

    const getConfirmPassword = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, confirmPassword: event.target.value }));
    }

    // To submit the register form
    const submit = () => {
        let firstNameTest = firstNameRegex.test(signUpObj.firstName)
        let lastNameTest = lastNameRegex.test(signUpObj.lastName)
        let emailTest = emailRegex.test(signUpObj.email)
        let passwordTest = passwordRegex.test(signUpObj.password)
        let confirmPassword = passwordRegex.test(signUpObj.confirmPassword)

        if (firstNameTest === true) {
            setSignUpRegexObj((prevState) => ({ ...prevState, firstNameBorder: false, firstNameHelper: "" }))
        }
        else if (firstNameTest === false) {
            setSignUpRegexObj((prevState) => ({ ...prevState, firstNameBorder: true, firstNameHelper: "Enter the valid name!" }))
        }

        if (lastNameTest === true) {
            setSignUpRegexObj((prevState) => ({ ...prevState, lastNameBorder: false, lastNameHelper: "" }))
        }
        else if (lastNameTest === false) {
            setSignUpRegexObj((prevState) => ({ ...prevState, lastNameBorder: true, lastNameHelper: "Enter the valid name!" }))
        }

        if (emailTest === true) {
            setSignUpRegexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }
        else if (emailTest === false) {
            setSignUpRegexObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter Valid Email" }))
        }

        if (passwordTest === true) {
            setSignUpRegexObj((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))

            if (signUpObj.confirmPassword === signUpObj.password) {
                setSignUpRegexObj((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
            }
            else if (signUpObj.confirmPassword === "") {
                setSignUpRegexObj((prevState) => ({ ...prevState, confirmPasswordBorder: true, confirmPasswordHelper: "Confirm your password" }))
            }
            else if (signUpObj.confirmPassword !== signUpObj.password) {
                setSignUpRegexObj((prevState) => ({
                    ...prevState, passwordBorder: true,
                    passwordHelper: "Those passwords didn’t match. Try again."
                }))
            }
        }
        else if (passwordTest === false) {
            setSignUpRegexObj((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter Valid Password" }))
        }

        if (firstNameTest === true && lastNameTest === true && emailTest === true && passwordTest === true &&
            signUpObj.confirmPassword === signUpObj.password) {

            console.log("Signup Successfull!")
            alert("Signup Successfull!")

        }


    }


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
                                <div className="first-name"><TextField onChange={getFirstName} error={signUpRegexObj.firstNameBorder} helperText={signUpRegexObj.firstNameHelper} id="outlined-basic" size='small' label="First Name" variant="outlined" /></div>
                                <div className="last-name"><TextField onChange={getLastName} error={signUpRegexObj.lastNameBorder} helperText={signUpRegexObj.lastNameHelper} id="outlined-basic" size='small' label="Last Name" variant="outlined" /></div>
                            </div>

                            {/* 3.2 - Email */}
                            {/* Code update at third line */}
                            <div className="emailid">
                                <TextField onChange={getEmail} error={signUpRegexObj.emailBorder} helperText={signUpRegexObj.emailHelper} id="outlined-basic" size='small' label="Email" variant="outlined" fullWidth />

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
                                        <TextField onChange={getPassword} error={signUpRegexObj.passwordBorder} helperText={signUpRegexObj.passwordHelper} id="outlined-basic" size='small' label="Password" variant="outlined" />
                                    </div>
                                    {/* 3.4.2 - Confirm Password */}
                                    <div className="confirm-password">
                                        <TextField onChange={getConfirmPassword} error={signUpRegexObj.confirmPasswordBorder} helperText={signUpRegexObj.confirmPasswordHelper} id="outlined-basic" size='small' label="Confirm Password" variant="outlined" />
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
                                <Button onClick={submit} className='containedbutton' variant='contained'>Next</Button>
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