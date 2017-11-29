import React, {Component} from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import CountryForm from './components/CountryForm'
import MatcheList from './components/MatchList'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Please insert a Country Fifa code to check Match results</h1>
                </header>
                <div className="App-container">
                    <div className="Matches-Results">
                        <CountryForm />
                        <MatcheList matches={this.props.matches} />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => state
export default connect(mapStateToProps)(App);
