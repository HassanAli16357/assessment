import {LOGIN_SUCCESS,REFRESH_USER} from '../actions/actiontypes'
import {AsyncStorage} from 'react-native'


const INITIAL_STATE = { 
    name : "",
    
}

export default  (state = INITIAL_STATE, action) => {
    // console.log(action)
    switch(action.type){
        case REFRESH_USER:
            // console.warn(action.payload)
            return {...state,name:action.payload}
       case LOGIN_SUCCESS:
                AsyncStorage.setItem("name",action.payload)
                return {...state , name:action.payload}
        
        default :
            return state
    }
    
}