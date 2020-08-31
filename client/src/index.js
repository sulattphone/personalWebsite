import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';

const store = createStore(() => [], applyMiddleware());   //reducer, for server side rendering, middleware

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));