import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="nav_style">
                <NavLink to="/" className="active_nav">
                    Home
                </NavLink>
                <NavLink to="/signin" className="active_nav">
                    Sign In
                </NavLink>
                <NavLink to="/signup" className="active_nav">
                    Sign Up
                </NavLink>
            </div>
        </>
    );
};

export default Header;
