import React from 'react'

const Match = ({match_number, home_team, away_team}) => (
    <li>
        {home_team.code} [{home_team.goals}] x [{away_team.goals}] {away_team.code}
    </li>
);

export default (props) => (
    <ul>
        {props.matches.map(match => <Match key={match.match_number} {...match}/>)}
    </ul>
)