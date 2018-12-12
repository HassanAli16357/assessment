import {ADD_SUCCESS,REFRESH_LIST,Remove_SUCCESS,UPDATE_TASK,REFRESH_USER} from './actiontypes'
import {AsyncStorage} from 'react-native'


export const ActionAddTodo = (data,navigation) =>{
    navigation.goBack()
    return {
        type:ADD_SUCCESS,
        payload:data
    }
    
}

export const removeTodo = (id) =>{
    
    return {
        type:Remove_SUCCESS,
        payload:id
    }
    
}

export const updateTodo = (id) =>{
    
    return {
        type:UPDATE_TASK,
        payload:id
    }
    
}

export const refreshList = ()=>{
    return async (dispatch) => {
        let data = JSON.parse( await AsyncStorage.getItem('Todos'))
        let user = await AsyncStorage.getItem('name')
        

        dispatch({
            type:REFRESH_USER,
            payload:user
        })

        if(!data){
            dispatch({
                type:REFRESH_LIST,
                payload:{todos:[]}
            })
        }
        else{
            dispatch({
                type:REFRESH_LIST,
                payload:data
            })
        }
        

    }
     
     
}