import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../api/firebase";
import Ficon from "./icons/ficon";
import Gicon from "./icons/gIcon"
import HubIcon from "./icons/hubIcon";
import './index.css';

function Button(props){
    const {label} = props;
    const navigate = useNavigate()
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider).then(() => {
            if(user != null){
                navigate('store');
            }
        })
    }
    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
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
            <button className="sign-btn">{label}</button>
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
