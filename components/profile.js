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
import {onLoginUser,onLogoutUser} from '../actions/authactions'
import {refreshList,removeTodo,updateTodo} from '../actions/todoactions'


const {width,height} = Dimensions.get("window")


class Profile extends Component{
  constructor(props){
      super(props);
     
  }

  

  
  render() {
    
    return (
      <View style={styles.container}>
      <View style={{width:'100%',height:100,backgroundColor:"#4CD964",justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:25,color:'white'}}>Hello, {this.props.auth.name}</Text>
      </View>
      <View style={{flex:1,paddingTop:20,alignItems:"center",justifyContent:"flex-end"}}>
      <TouchableOpacity onPress={()=>this.props.onLogoutUser(this.props.navigation)} style={{height:50,width:width-20,backgroundColor:"#4CD964",borderRadius:2,justifyContent:"center",alignItems:"center"}}>
          <Text style={{fontSize:18,color:"white"}}>Log Out </Text>
          </TouchableOpacity>
    </View>
      
      
      </View>
    );
  }
}

const mapStateToProps = ({ auth,Todo }) => {
  // console.log(auth)
  return { Todo,auth }
}
export default connect(mapStateToProps, {
    onLogoutUser
})(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    paddingVertical:30
    
  },
  
});
