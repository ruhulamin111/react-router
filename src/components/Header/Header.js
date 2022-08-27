import React from 'react';
import { Link } from "react-router-dom";



const Header = () => {

    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
            </nav>
        </div >
    );
};

export default Header;