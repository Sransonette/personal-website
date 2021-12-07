import React from 'react';
import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
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
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}


