import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/loginForm";
import Register from "../components/registerForm";
import "./index.css";
function Auth(){
    return(
        <div className="auth-top-container">
            <Routes>
                <Route path='login' element={<Login/>}/>
                <Route path='login/register' element={<Register/>}/>
            </Routes>
        </div>
    );
}
export default Auth;