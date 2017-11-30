const initialState = {
        currentSearch: 'USA',
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

export const updateSearch = (val) => ({type:'SEARCH_UPDATE', payload: val});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_UPDATE':
            return {...state, currentSearch: action.payload};
        default:
            return state;
    }
}