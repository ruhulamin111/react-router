import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? "red" : "",
        };
    }

    return (
        <div>
            <nav>
                <NavLink style={navLinkStyles} to="/home">Home</NavLink>
                <NavLink style={navLinkStyles} to="/shop">Shop</NavLink>
                <NavLink style={navLinkStyles} to="/mealDb">Meal Db</NavLink>
                <NavLink style={navLinkStyles} to="/about">About</NavLink>
            </nav>
        </div >
    );
};

export default Header;