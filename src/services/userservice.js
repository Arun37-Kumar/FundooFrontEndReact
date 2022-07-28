import axios from "axios";

export const signUp = (signUpObj) => {
    let response = axios.post('https://localhost:44376/api/User/register', signUpObj)
    return response;
}

export const signIn = (signInObj) => {
    let response = axios.post('https://localhost:44376/api/User/login', signInObj)
    return response;
}
