import { combineReducers } from 'redux'
import board from './boardReducer.js'
import topics from './topicReducer.js'
import currentQuestion from './currentQuestionReducer.js'
<<<<<<< 80c4087694376b78f05f7bcc5e35cbf0b3c98b0f
import openReducer from './openReducer.js'
import {reducer as form } from 'redux-form';
import analytics from './analyticsReducer'


export default combineReducers({board,topics,currentQuestion,openReducer,form, analytics})
=======
import optionReducer from './optionReducer.js'
import sessionsReducer from './sessionsReducer'


export default combineReducers({board,topics,currentQuestion, optionReducer, sessionsReducer})
>>>>>>> began authentication
