import { combineReducers } from 'redux'
import {reducer as formReducer } from 'redux-form';
import board from './boardReducer.js'
import topics from './topicReducer.js'
import categories from './categoriesReducer.js'
import currentQuestion from './currentQuestionReducer.js'
import openReducer from './openReducer.js'
import analytics from './analyticsReducer'
import authReducer from './authReducer'
import user from './userReducer'


const rootReducer = combineReducers({
  authentication: authReducer,
  form: formReducer,
  board: board,
  topics: topics,
  currentQuestion: currentQuestion,
  openReducer: openReducer,
  analytics: analytics,
  authReducer: authReducer,
  user: user,
  categories: categories

})


export default rootReducer
