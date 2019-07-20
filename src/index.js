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

const reduxStore = createStore(
    combineReducers({
    feelingsReducer
    
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

