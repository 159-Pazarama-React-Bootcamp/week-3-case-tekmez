import { signInWithPopup } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { googleAuth, googleProvider } from "../../api/firebase";
// import app from "../../api/firebase";
import Ficon from "./icons/ficon";
import Gicon from "./icons/gIcon"
import HubIcon from "./icons/hubIcon";
import './index.css';

function Button(props){
    const {label} = props;
    const login = () => {
        // console.log('click');
        signInWithPopup(googleAuth, googleProvider);
    }
    return(
        <div>
            <Link to='store'><button className="sign-btn">{label}</button></Link>
            {label === 'Sign in' && (
            <div className="connect-field">
                <p className="continue-text">or continue with</p>
                <Link to= 'store'>
                    <div className="connect-btn">
                            <button onClick={login} className="icon-btn"><i><Gicon/></i></button>
                            <button className="icon-btn"><i><HubIcon/></i></button>
                            <button className="icon-btn"><i><Ficon/></i></button>
                    </div>
                </Link>
            </div>
            )}
        </div>
    );
}
export default Button;