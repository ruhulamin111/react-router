import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Item = () => {
    const { productId } = useParams();
    const [items, setItems] = useState({});
    useEffect(() => {
        const url = `https://restcountries.com/v2/name/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data[0]))
    }, [productId])

    return (
        <div>
            <img height={200} src={items.flags?.png} alt="" />
            <h3>Name : {items.name}</h3>
            <h3>Area : {items.area}</h3>
            <h3>Region : {items.region}</h3>
            <h3>Population : {items.population}</h3>
        </div>
    );
};

export default Item;