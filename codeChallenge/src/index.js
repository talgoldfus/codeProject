import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import theReducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import { Router, Route, Link, browserHistory } from 'react-router'
import Routes from './routes'

let createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
let store = createStoreWithMiddleware(theReducer)
// debugger
ReactDOM.render(

  <Provider store={store} >
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
 document.getElementById('root')
);


// Object {}dispatch: (action)getState: getState()replaceReducer: replaceReducer(nextReducer)subscribe: subscribe(listener)Symbol(observable): observable()__proto__: Object
