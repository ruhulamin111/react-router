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
    }, [items])
    console.log(items);
    return (
        <div>
            <img height={200} src={items.flags?.png} alt="" />
            <h3>{items.name}</h3>
            <h3>{items.region}</h3>
            <h3>{items.population}</h3>

        </div>
    );
};

export default Item;