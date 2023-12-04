import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error("opps");
    // }
    return (
        <div>
            {robots.map((robot) => {
                return (<Card 
                    key={robot.id}
                    id={robot.id}
                    name={robot.name}
                    email={robot.email}
                    />)
                    })}
        </div>
    );
}

export default CardList;
