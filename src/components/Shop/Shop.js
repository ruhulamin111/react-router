import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [countires, setContries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/region/asia')
            .then(res => res.json())
            .then(data => setContries(data))
    }, [countires])

    return (
        <div>
            <h2>Shop with Country</h2>
            {
                countires.map((country, index) => <Product
                    key={index}
                    country={country}
                ></Product>)
            }
        </div>
    );
};

export default Shop;