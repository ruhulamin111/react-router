import React from 'react';
import { useParams } from "react-router-dom";

const Item = () => {
    const { productId } = useParams();

    return (
        <div>
            <h2>Item details : {productId}</h2>

        </div>
    );
};

export default Item;