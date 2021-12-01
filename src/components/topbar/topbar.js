import React from 'react';
import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Sean.</a>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>Sransonette@gmail.com</span>
                        <Person className="icon" />
                        <span>https://www.linkedin.com/in/sean-ransonette-0abb284a/</span>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </div >
    );
}

export default Topbar;
