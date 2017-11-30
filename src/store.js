import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/results'

export default createStore(
    reducer,
    applyMiddleware(thunk)
)