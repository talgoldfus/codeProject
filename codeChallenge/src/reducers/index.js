import { combineReducers } from 'redux'
import board from './boardReducer.js'
import topics from './topicReducer.js'
import currentQuestion from './currentQuestionReducer.js'
import optionReducer from './optionReducer.js'
import authReducer from './authReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  authentication: authReducer,
  form: formReducer,
  board: board,
  topics: topics,
  currentQuestion: currentQuestion,
  optionReducer: optionReducer
})

export default rootReducer