import {ADD_SUCCESS,REFRESH_LIST,Remove_SUCCESS,UPDATE_TASK} from '../actions/actiontypes'
import {AsyncStorage} from 'react-native'


const INITIAL_STATE = { 
    todos:[]
    
}

export default  (state = INITIAL_STATE, action) => {
    // console.log(action)
    switch(action.type){
       case ADD_SUCCESS :
       AsyncStorage.setItem("Todos",JSON.stringify({...state,todos:[action.payload,...state.todos]}))
        return {...state,todos:[action.payload,...state.todos]}
        case REFRESH_LIST:
        // console.warn(action.payload)
            return action.payload
        case Remove_SUCCESS:
        todos = state.todos.filter((todo)=>todo.id != action.payload)
        AsyncStorage.setItem("Todos",JSON.stringify({...state,todos:todos}))
            return {...state,todos:todos}
        case UPDATE_TASK :
            todos = state.todos.map((todo)=>{
                if(todo.id == action.payload){
                    return {
                        ...todo,
                        completed:true
                    }
                   
                }
                else{
                    return todo
                }
            })
            AsyncStorage.setItem("Todos",JSON.stringify({...state,todos:todos}))
            // console.warn(todos)
            return {...state,todos:todos}
        default :
            return state
    }
    
}