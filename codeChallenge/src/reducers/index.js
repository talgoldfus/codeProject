import { combineReducers } from 'redux'
import board from './boardReducer.js'
import topics from './topicReducer.js'
import currentQuestion from './currentQuestionReducer.js'


export default combineReducers({board,topics,currentQuestion})
