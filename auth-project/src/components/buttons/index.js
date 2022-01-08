import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { googleAuth, googleProvider } from "../../api/firebase";
import Ficon from "./icons/ficon";
import Gicon from "./icons/gIcon"
import HubIcon from "./icons/hubIcon";
import './index.css';

function Button(props){
    const {label} = props;
    const navigate = useNavigate()
    const googleLogin = () => {
        signInWithPopup(googleAuth, googleProvider).then(() => {
            if(user != null){
                navigate('store');
            }
        })
    }
    const [user, setUser] = useState(null);
    useEffect(() => {
        googleAuth.onAuthStateChanged(authUser => {
            if(authUser){
                setUser(authUser);
            }
            else{
                setUser(null);
            }
        })
    }, [])

    return(
        <div>
            <Link to='store'><button className="sign-btn">{label}</button></Link>
            {label === 'Sign in' && (
            <div className="connect-field">
                <p className="continue-text">or continue with</p>
                    <div className="connect-btn">
                            <button onClick={googleLogin} className="icon-btn"><i><Gicon/></i></button>
                            <button className="icon-btn"><i><HubIcon/></i></button>
                            <button className="icon-btn"><i><Ficon/></i></button>
                    </div>
            </div>
            )}
        </div>
    );
}
export default Button;
