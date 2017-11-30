import React, {Component} from 'react';
import {connect} from 'react-redux'
import logo from './images/logo.svg';
import './App.css';
import CountryForm from './components/CountryForm'
import MatchList from './components/MatchList'
import Message from './components/Message'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-container">
                    <div className="Matches-Results">
                        <Message />
                        <CountryForm currentSearch={this.props.currentSearch} updateSearch={this.props.updateSearch} />
                        <MatchList />
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(App);
