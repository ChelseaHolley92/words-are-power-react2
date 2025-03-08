import React from "react";
import logo from '../assets/logo.jpg';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Words Are Power Logo" className="logo" />
            <h1>Words Are Power Affirmation App</h1>
        </header>
    );

};

export default Header;