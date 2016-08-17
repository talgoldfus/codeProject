import { combineReducers } from 'redux'
import board from './boardReducer.js'
import topics from './topicReducer.js'
import currentQuestion from './currentQuestionReducer.js'
import openReducer from './openReducer.js'
import {reducer as form } from 'redux-form';


export default combineReducers({board,topics,currentQuestion,openReducer,form})
