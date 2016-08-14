import {combineReducers} from 'redux'
import board from './boardReducer.js'
import topics from './topicReducer.js'


export default combineReducers({board,topics})
