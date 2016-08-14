import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import theReducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const store = createStoreWithMiddleware(theReducer)
debugger

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('root')
);
