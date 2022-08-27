import React from 'react';
import { useNavigate } from "react-router-dom";


const Product = ({ country }) => {
    const { name: { common, official }, flags: { png }, ccn3 } = country;
    const navigate = useNavigate();
    const showDetails = () => {
        const path = `/product/${ccn3}`
        navigate(path);
    }

    return (
        <div>
            <img width={200} height={150} src={png} alt="" />
            <h2>{official}</h2>
            <button onClick={showDetails}>{common}</button>
        </div>
    );
};

export default Product;