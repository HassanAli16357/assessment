/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// import { Provider } from 'react-redux'
// import configureStore from './configurestore'
// import Stack from './components/navigation'
// const store = configureStore()
import AppStack from './components/navigation'
import { Provider } from 'react-redux'
import configureStore from './configurestore'

const store = configureStore()





export default class App extends Component{
 
  render() {
    return (
    <Provider store={store}>
    <AppStack />
    </Provider>
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
