import {getMatches} from "../api/resultsServices";

// initialState
const initialState = {
    currentSearch: 'USA',
    matches: []
};

// action constants
const SEARCH_UPDATE = 'SEARCH_UPDATE';
const MATCHES_LOAD = 'MATCHES_LOAD';

// sync action creators
export const updateSearch = (val) => ({type: SEARCH_UPDATE, payload: val});
export const loadMatches = (matches) => ({type: MATCHES_LOAD, payload: matches});
// async action creators
export const fetchMatches = (currentSearch) => {
    return (dispatch) => {
        getMatches(currentSearch)
            .then(matches => dispatch(loadMatches(matches)))
    }
};

// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_UPDATE:
            return {...state, currentSearch: action.payload};
        case MATCHES_LOAD:
            return {...state, matches: action.payload};
        default:
            return state;
    }
}