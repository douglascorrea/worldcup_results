import {applyMiddleware, createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import resultsReducer from './reducers/results'
import messageReducer from './reducers/messages'

const reducer = combineReducers({
   result: resultsReducer,
   message: messageReducer
});

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)