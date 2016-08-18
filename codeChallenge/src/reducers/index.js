import { combineReducers } from 'redux'
import board from './boardReducer.js'
import topics from './topicReducer.js'
import currentQuestion from './currentQuestionReducer.js'
import openReducer from './openReducer.js'
import {reducer as form } from 'redux-form';
import analytics from './analyticsReducer'
import optionReducer from './optionReducer.js'
import authReducer from './authReducer'


const rootReducer = combineReducers({
  authentication: authReducer,
  form: formReducer,
  board: board,
  topics: topics,
  currentQuestion: currentQuestion,
  optionReducer: optionReducer,
  openReducer: openReducer,
  analytics: analytics,
  authReducer: authReducer
})


export default rootReducer

