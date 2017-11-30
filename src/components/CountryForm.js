import React from 'react'

export default (props) => {
    const {currentSearch, updateSearch} = props;
    const handleInputChange = (evt) => {
        const val = evt.target.value;
        updateSearch(val);
    };
    return (
        <form onSubmit={}>
        <input type="text"
               onChange={handleInputChange}
               value={currentSearch}/>
            <button type="submit">Search</button>
    </form>
    )
}