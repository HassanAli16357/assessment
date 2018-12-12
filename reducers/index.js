import { combineReducers } from 'redux'
import authReducer from './authReducer'
import todoReducer from './listreducer'

export default combineReducers({
    auth:authReducer,
    Todo:todoReducer

});