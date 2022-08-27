import React from 'react';

const MealDbDetails = ({ league }) => {
    const { seasons } = league;


    return (
        <div>
            <h2>{seasons}</h2>

        </div>
    );
};

export default MealDbDetails;