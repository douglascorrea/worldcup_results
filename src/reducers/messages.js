import {MATCHES_LOAD} from './results'

export const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = (message) => ({type: MESSAGE_SHOW, payload: message});

export default (state = '', action) => {
    switch (action.type) {
        case MESSAGE_SHOW:
            return action.payload;
        case MATCHES_LOAD:
            return '';
        default:
            return state;
    }
}