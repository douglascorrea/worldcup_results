import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchMatches} from "../reducers/results";

const Match = ({match_number, home_team, away_team}) => (
    <li>
        {home_team.code} [{home_team.goals}] x [{away_team.goals}] {away_team.code}
    </li>
);

class MatchList extends Component {
    componentDidMount() {
        this.props.fetchMatches();
    }
    render() {
        return (
            <ul>
                {this.props.matches.map(match => <Match key={match.match_number} {...match}/>)}
            </ul>
        );
    }
}

export default connect(
    (state) => ({matches: state.matches}),
    {fetchMatches}
)(MatchList);