import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/region/asia')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [countries])

    return (
        <div>
            {
                countries.map((country, index) => <Product
                    key={index}
                    country={country}
                ></Product>)
            }
        </div>
    );
};

export default Home;