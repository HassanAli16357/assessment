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

const {width,height} = Dimensions.get("window")

class Login extends Component{
  state={
    name:""
  }

  login = ()=>{
    if(this.state.name === ""){
      alert("enter name")
    }
    else{
      this.props.onLoginUser(this.state.name,this.props.navigation)
    }
  }
  render() {
    return (
      <View style={styles.container}>
       <View style={{flex:.8,justifyContent:"center",alignItems:"center"}}>
       <Text style={{fontSize:30,fontWeight:"bold"}}>Todo</Text>
       </View>
       <View style={{flex:.2,justifyContent:"space-around"}}>
          <View style={{flex:.4,width:width-20,borderWidth:1,borderRadius:2,borderColor:"rgba(0,0,0,.5)",justifyContent:"center",paddingHorizontal:10}}>
          <TextInput placeholder="name" value={this.state.name} onChangeText={(value)=>this.setState({name:value})} style={{fontSize:16}}/>
          </View>
          <TouchableOpacity onPress={this.login} style={{flex:.4,width:width-20,backgroundColor:"#4CD964",borderRadius:2,justifyContent:"center",alignItems:"center"}}>
          <Text style={{fontSize:18,color:"white"}}>Log In </Text>
          </TouchableOpacity>
       </View>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  // console.log(auth)
  return { auth }
}
export default connect(mapStateToProps, {
  onLoginUser
})(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:30
    
  },
  
});
