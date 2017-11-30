import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {updateSearch} from "../reducers/results";

const CountryForm = (props) => {
    const {currentSearch, updateSearch} = props;
    const handleInputChange = (evt) => {
        const val = evt.target.value;
        updateSearch(val);
    };
    return (
        <form>
            <input type="text"
                   onChange={handleInputChange}
                   value={currentSearch}/>
            <button type="submit">Search</button>
        </form>
    )
};

export default connect(
    (state) => ({currentSearch: state.currentSearch}),
    (dispatch) => bindActionCreators({updateSearch}, dispatch)
)(CountryForm)