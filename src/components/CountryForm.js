import React from 'react'

export default (props) => {
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
    </form>
    )
}