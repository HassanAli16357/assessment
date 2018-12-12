/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Dimensions,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import {onLoginUser} from '../actions/authactions'
import {refreshList,removeTodo,updateTodo} from '../actions/todoactions'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const {width,height} = Dimensions.get("window")

const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };
class Home extends Component{
  constructor(props){
      super(props);
      this.props.refreshList()
  }

  onSwipeLeft(gestureState,todo) {
    //   console.warn(todo)
      this.props.removeTodo(todo.id)
   
  }

  onSwipeRight(gestureState,todo) {
    // console.warn(todo)
   this.props.updateTodo(todo.id)
  }
renderList = ()=>{
    if(!this.props.Todo)
    {
            return(<View></View>)
    }
    else
    {
  return  this.props.Todo.todos.map((todo)=>{
        
        return(
            <GestureRecognizer
        key={todo.id}
        onSwipeLeft={(state) => this.onSwipeLeft(state,todo)}
        onSwipeRight={(state) => this.onSwipeRight(state,todo)}
        config={config}
        
        >
        <View  style={{height:30,width:'100%',paddingHorizontal:20,flexDirection:"row",alignItems:"center",marginBottom:30}}>
      <View style={{width:20,height:20,borderRadius:15,backgroundColor:todo.color,marginRight:20}}></View>
      <View>
          {!todo.completed ? 
      <Text style={{fontSize:20}}>{todo.task}</Text>
      :
      <Text style={{fontSize:20,textDecorationLine:"line-through"}}>{todo.task}</Text>}
      <Text style={{fontSize:15}}>Due Tommorrow</Text>
      </View>
      </View></GestureRecognizer>)
    })}
}
  
  render() {
    
    return (
      <View style={styles.container}>
      <View style={{width:'100%',height:100,backgroundColor:"#4CD964",justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:25,color:'white'}}>Todo</Text>
      </View>
      <View style={{flex:1,paddingTop:20}}>
     {this.renderList()}
    </View>
      
      {/* <View style={{width:"100%",height:30,position:"absolute",bottom:0,flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("AddTodo")}><Text>add</Text></TouchableOpacity>
      </View> */}
      </View>
    );
  }
}

const mapStateToProps = ({ auth,Todo }) => {
//   console.warn(auth)
//   console.warn(Todo)
  return { Todo }
}
export default connect(mapStateToProps, {
  onLoginUser,
  refreshList,removeTodo,updateTodo
})(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    paddingVertical:30
    
  },
  
});
