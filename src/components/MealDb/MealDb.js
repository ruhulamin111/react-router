import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const MealDb = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=Spain')
            .then(res => res.json())
            .then(data => setLeagues(data.teams))
    }, [leagues])

    return (
        <div>

            <h2>Meal Db : {leagues.length}</h2>
            {
                leagues.slice(0, 10).map((league, index) => <Link
                    to={`/mealDb/${league.idTeam}`}
                    key={index}
                > {league.strTeam} </Link>)
            }

            <Outlet></Outlet>
        </div>
    );
};

export default MealDb;