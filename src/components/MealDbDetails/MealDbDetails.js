import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const MealDbDetails = () => {
    const { mealDbId } = useParams();
    const [teams, setTeams] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/2/eventslast.php?id=${mealDbId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.results[0]))
    }, [mealDbId])

    return (
        <div>
            <h3>Name : {teams.strAwayTeam} </h3>
            <h3>Country: {teams.strCountry} </h3>
            <h3>Event : {teams.strEvent} </h3>
            <h3>Sports : {teams.strSport} </h3>
        </div>
    );
};

export default MealDbDetails;