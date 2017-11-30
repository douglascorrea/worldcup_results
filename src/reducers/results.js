import {getMatches} from "../api/resultsServices";
import {showMessage} from "./messages";
// initialState
const initialState = {
    currentSearch: 'USA',
    matches: []
};

// action constants
export const SEARCH_UPDATE = 'SEARCH_UPDATE';
export const MATCHES_LOAD = 'MATCHES_LOAD';

// sync action creators
export const updateSearch = (val) => ({type: SEARCH_UPDATE, payload: val});
export const loadMatches = (matches) => ({type: MATCHES_LOAD, payload: matches});
// async action creators
export const fetchMatches = (currentSearch) => {
    return (dispatch) => {
        dispatch(showMessage('Loading results'));
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