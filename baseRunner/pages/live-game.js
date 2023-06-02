import React from 'react';
import { useSelector } from 'react-redux';

const LiveGamePage = () => {
    const homeTeam = useSelector((state) => state.gameReducer.homeTeam);
    const awayTeam = useSelector((state) => state.gameReducer.awayTeam);
    const organization = useSelector((state) => state.gameReducer.organization);

    return (
        <div>
            {console.log(homeTeam, awayTeam, organization)}
            <h1>Live Game Page</h1>
        </div>
    )
};

export default LiveGamePage;