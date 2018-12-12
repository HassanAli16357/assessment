import {LOGIN_SUCCESS} from './actiontypes'
import {AsyncStorage} from 'react-native'

export const onLoginUser = (name,navigation) =>{
    navigation.navigate("Home")
    return {
        type:LOGIN_SUCCESS,
        payload:name
    }
    
}

export const onLogoutUser = (navigation) =>{
    return async (dispatch) => {
          await  AsyncStorage.removeItem('name')
         await   AsyncStorage.removeItem('Todos')
        navigation.navigate("Auth")
    }
    
}