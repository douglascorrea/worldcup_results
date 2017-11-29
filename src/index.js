import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
    matches: [
        {
            match_number:7,
            datetime:"2015-06-08T17:30:00.000-05:00",
            status:"completed",
            home_team:{
                country:"United States",
                code:"USA",
                goals:3,
            },
            away_team:{
                country:"Australia",
                code:"AUS",
                goals:1
            },
            winner:"United States",
            winner_code:"USA",
        },
        {
            match_number:8,
            datetime:"2015-06-08T17:30:00.000-05:00",
            status:"completed",
            home_team:{
                country:"Brazil",
                code:"BRA",
                goals:4,
            },
            away_team:{
                country:"Argentina",
                code:"ARG",
                goals:0
            },
            winner:"Brazil",
            winner_code:"BRA",
        },
        {
            match_number:9,
            datetime:"2015-06-08T17:30:00.000-05:00",
            status:"completed",
            home_team:{
                country:"Colombia",
                code:"COL",
                goals:2,
            },
            away_team:{
                country:"Cameroon",
                code:"CAM",
                goals:1
            },
            winner:"Brazil",
            winner_code:"BRA",
        }
    ]
};

ReactDOM.render(<App matches={state.matches} />, document.getElementById('root'));
registerServiceWorker();
