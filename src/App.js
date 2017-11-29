import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Please insert a Country Fifa code to check Match results</h1>
                </header>
                <div className="App-container">
                    <form>
                        <input type="text"/>
                    </form>
                    <div className="Matches-Results">
                        <ul>
                            {this.props.matches.map(match => (
                                <li key={match.match_number}>
                                    {match.home_team.code} [{match.home_team.goals}] x [{match.away_team.goals}] {match.away_team.code}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
