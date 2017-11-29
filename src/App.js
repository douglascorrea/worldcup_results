import React, {Component} from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import {updateSearch} from "./reducers/results";
import CountryForm from './components/CountryForm'
import MatchList from './components/MatchList'
import {bindActionCreators} from "redux";

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
                        <CountryForm currentSearch={this.props.currentSearch} updateSearch={this.props.updateSearch} />
                        <MatchList matches={this.props.matches} />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({updateSearch}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
