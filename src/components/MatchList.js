import React from 'react'
import {connect} from 'react-redux'

const Match = ({match_number, home_team, away_team}) => (
    <li>
        {home_team.code} [{home_team.goals}] x [{away_team.goals}] {away_team.code}
    </li>
);

const MatchList = ({matches}) => (
    <ul>
        {matches.map(match => <Match key={match.match_number} {...match}/>)}
    </ul>
);

export default connect(
    (state) => ({matches: state.result.matches}),
)(MatchList);