import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const MealDbDetails = () => {
    const { mealDbId } = useParams();
    const [temas, setTeams] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/2/lookupequipment.php?id=${mealDbId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.equipment))
    }, [mealDbId])


    return (
        <div>
            <h2>Meal Db Details : {mealDbId}</h2>
            <h2>Teams : { } </h2>

        </div>
    );
};

export default MealDbDetails;