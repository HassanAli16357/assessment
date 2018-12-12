/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,ScrollView, View,TextInput,Dimensions,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import {ActionAddTodo} from '../actions/todoactions'

const {width,height} = Dimensions.get("window")

class AddTodo extends Component{
  state={
      color:"9AC1EF",
      task:"",
      due:"",

  }
  changecolor = (color)=>{
        this.setState({color})
  } 

add = ()=>{
    let data={
        id:Date.now(),
        task:this.state.task,
        color:this.state.color,
        due:this.state.due,
        completed:false
    }
    this.props.ActionAddTodo(data,this.props.navigation)
}

  
  render() {
    return (
      <View style={styles.container}>
      <View style={{width:'100%',height:100,backgroundColor:"#4CD964",justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:25,color:'white'}}>Add</Text>
      </View>
      <View style={{flex:1,alignItems:"center",paddingTop:40}}>
        <View style={{width:'98%',height:90,borderWidth:.7,paddingRight:10,marginBottom:20}}>
        <TextInput placeholder="what do you need" multiline={true} numberOfLines={5} value={this.state.task} onChangeText={(value)=>this.setState({task:value})}/>
        </View>

         <View style={{width:'98%',height:40,borderWidth:.7,paddingRight:10,justifyContent:"center",marginBottom:20}}>
        <TextInput placeholder="WHEN IS IT DUE" value={this.state.due} onChangeText={(value)=>this.setState({due:value})} />
        </View>
        <ScrollView style={{width:'100%',flexDirection:"row",marginBottom:40}} horizontal={true} contentContainerStyle={{marginHorizontal:6,justifyContent:"center"}}>
        <TouchableOpacity onPress={()=>this.changecolor("#4A90E2")} style={{width:60,height:60,borderRadius:30,backgroundColor:"#4A90E2",marginRight:10}}></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.changecolor("#DFF4C7")} style={{width:60,height:60,borderRadius:30,backgroundColor:"#DFF4C7",marginRight:10}}></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.changecolor("#F3BFC6")} style={{width:60,height:60,borderRadius:30,backgroundColor:"#F3BFC6",marginRight:10}}></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.changecolor("#EEC3F7")} style={{width:60,height:60,borderRadius:30,backgroundColor:"#EEC3F7",marginRight:10}}></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.changecolor("#FCE8C8")} style={{width:60,height:60,borderRadius:30,backgroundColor:"#FCE8C8",marginRight:10}}></TouchableOpacity>
        
        </ScrollView>
        <TouchableOpacity onPress={this.add} style={{height:60,width:width-20,backgroundColor:"#4CD964",borderRadius:2,justifyContent:"center",alignItems:"center"}}>
          <Text style={{fontSize:18,color:"white"}}>Add</Text>
          </TouchableOpacity>
      </View>

      
     
      
      {/* <View style={{width:"100%",height:30,position:"absolute",bottom:0,flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("AddTodo")}><Text>add</Text></TouchableOpacity>
      </View> */}
      </View>
    );
  }
}

const mapStateToProps = ({ auth,Todo }) => {
  // console.log(auth)
  return { AddTodo }
}
export default connect(mapStateToProps, {
    ActionAddTodo
})(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    paddingVertical:30
    
  },
  
});
