import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducer from './reducer';
import thunk from 'redux-thunk';

//创建一个 Redux store 来存放应用中所有的 state，应用中有且仅有一个 store。
let store = createStore(
    combineReducers(reducer),
    applyMiddleware(thunk)
);

export default store;