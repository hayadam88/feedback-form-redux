import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// Information about the Feelings feedback will be stored in this reducer
const feelingsReducer = (state = {feeling: 0}, action) => {
    console.log('In feelingsReducer');
     if (action.type === 'SET_FEELINGS') {
         return action.payload;
     } 
    return state;
}

// Information about the Understanding feedback will be stored in this reducer
const understandingReducer = (state = {understanding: 0}, action) => {
    console.log('In understandingReducer');
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

// Information about the Support feedback will be stored in this reducer
const supportReducer = (state = {support: 0}, action) => {
    console.log('In supportReducer');
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state;
}

// Information from the Comment feedback will be stored in this reducer
const commentReducer = (state = {comments: ''}, action) => {
    console.log('In commentReducer');
    if (action.type === 'SET_COMMENT'){
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
    feelingsReducer,
    understandingReducer,
    supportReducer,
    commentReducer,
     }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

