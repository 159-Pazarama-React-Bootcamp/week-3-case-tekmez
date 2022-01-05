import React from "react";
import Ficon from "./icons/ficon";
import Gicon from "./icons/gIcon"
import HubIcon from "./icons/hubIcon";
import './index.css';

function Button(props){
    const {label} = props;
    return(
        <div>
            <button className="sign-btn">{label}</button>
            {label === 'Sign in' && (
            <div className="connect-field">
                <p className="continue-text">or continue with</p>
                    <div className="connect-btn">
                        <button className="icon-btn"><i><Gicon/></i></button>
                        <button className="icon-btn"><i><HubIcon/></i></button>
                        <button className="icon-btn"><i><Ficon/></i></button>
                    </div>
            </div>
            )}
        </div>
    );
}
export default Button;