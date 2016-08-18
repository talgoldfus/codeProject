import { combineReducers } from 'redux'
import board from './boardReducer.js'
import topics from './topicReducer.js'
import currentQuestion from './currentQuestionReducer.js'
import optionReducer from './optionReducer.js'
import sessionsReducer from './sessionsReducer'


export default combineReducers({board,topics,currentQuestion, optionReducer, sessionsReducer})
