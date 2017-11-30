import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchMatches, updateSearch} from "../reducers/results";

export const CountryForm = (props) => {
    const {currentSearch, updateSearch, fetchMatches} = props;
    const handleInputChange = (evt) => {
        const val = evt.target.value;
        updateSearch(val);
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        fetchMatches(currentSearch);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   onChange={handleInputChange}
                   value={currentSearch}/>
            <button type="submit">Search</button>
        </form>
    )
};

export default connect(
    (state) => ({currentSearch: state.result.currentSearch}),
    (dispatch) => bindActionCreators({updateSearch, fetchMatches}, dispatch)
)(CountryForm)