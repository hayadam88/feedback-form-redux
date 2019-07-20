import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingsReducer = (state = {}, action) => {
    console.log('In feelingsReducer');
     if (action.type === 'SET_FEELINGS') {
         return action.payload;
     } 
    return state;
}

const understandingReducer = (state = {}, action) => {
    console.log('In understandingReducer');
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const supportReducer = (state = {}, action) => {
    console.log('In supportReducer');
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
    feelingsReducer,
    understandingReducer,
    supportReducer,
    
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

