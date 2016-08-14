import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
 <Provider store={createStoreWithMiddleware(reducer)}>
   <App />
 </Provider>,
 document.getElementById('root')
);
