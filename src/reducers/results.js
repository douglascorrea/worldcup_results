const initialState = {
        currentSearch: 'USA',
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