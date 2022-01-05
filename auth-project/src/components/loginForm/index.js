import React from "react";
import Field from "../field";
import Button from "../buttons";
import "./index.css";
import { Link } from "react-router-dom";
function Login(){
    return(
    <div className="login-top-container">
        <div className="login-field-container">
            <img src={require("./logo/logo.png")} alt='logo' className="top-left-logo"/>
            <h1 className="login-title">Login</h1>
            <Field label='Email' type='email' placeholder='username@mail.com'/>
            <Field label='Password' type='password' placeholder='Password'/>
                <div className="bottom-container">
                    <Button label='Sign in'/>
                    <p className="bottom-text">Don't have an account yet ?
                    <Link to='register'><button className="register-btn">Register for Free</button></Link>
                    </p>
                </div>
        </div>
        <div className="login-right-logo">
            <img src={require("./logo/a.jpg")} alt='logo2'/>
        </div>
    </div>
    );
}
export default Login;