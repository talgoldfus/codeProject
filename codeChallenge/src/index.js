import React from 'react';
import ReactDOM from 'react-dom';
import theReducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import { Router,browserHistory } from 'react-router'
import Routes from './routes'
import reduxThunk from 'redux-thunk';
import configureStore from './store/configureStore.js'

const store = configureStore();

// let createStoreWithMiddleware = applyMiddleware(reduxThunk, ReduxPromise)(createStore)
// let store = createStoreWithMiddleware(theReducer,window.devToolsExtension ? window.devToolsExtension() : f => f)


ReactDOM.render(

  <Provider store={store} >
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
 document.getElementById('root')
);


// Object {}dispatch: (action)getState: getState()replaceReducer: replaceReducer(nextReducer)subscribe: subscribe(listener)Symbol(observable): observable()__proto__: Object
