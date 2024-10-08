import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'
import rootReducer from './reducers/rootReducer.js'

export const store = createStore(
	rootReducer, applyMiddleware(thunk)
 )