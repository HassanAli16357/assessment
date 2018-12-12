/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,AsyncStorage} from 'react-native';

// import { Provider } from 'react-redux'
// import configureStore from './configurestore'
// import Stack from './components/navigation'
// const store = configureStore()






export default class AuthLoading extends Component{
    constructor(props) {
        super(props);
        this._bootstrapAsync();
      }
      _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('name');
        
    
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        if(userToken){
         
          this.props.navigation.navigate('App')
          
        }
        else{
          this.props.navigation.navigate('Auth');
         
        }
        
        
      };
  render() {
    return (
     <View style={{flex:1}}></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
