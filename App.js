import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import StoryScreen from './Screens/StoryScreen';
import NewStoryScreen from './Screens/NewStoryScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'

export default function App() {
  return (
    <AppContainer/>
  );
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen: {screen: LoginScreen}, 
  HomeScreen: {screen: HomeScreen},
  StoryScreen: {screen: StoryScreen},
  NewStoryScreen: {screen: NewStoryScreen},
})

const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
