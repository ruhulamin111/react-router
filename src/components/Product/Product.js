import React from 'react';
import { useNavigate } from "react-router-dom";


const Product = ({ country }) => {
    const { name, flags, ccn3 } = country;
    const navigate = useNavigate();

    const showDetails = (ccn3) => {
        const path = `/product/${ccn3}`
        navigate(path);
    }

    return (
        <div>
            <img width={200} height={150} src={flags.png} alt="" />
            <p>{name.official}</p>
            <button>{name.common}</button>
        </div>
    );
};

export default Product;