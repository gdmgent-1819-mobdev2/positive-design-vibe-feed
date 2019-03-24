import React from 'react'
import {StyleSheet} from 'react-native';

import { StackNavigator} from 'react-navigation';
import Feed from './app/screens/Feed';
import Quotes from './app/screens/Quotes';
import User from './app/screens/User';
import MoodChange from './app/screens/MoodChange';
import AppTabNavigation from './app/components/MainTabNavigation/MainTabNavigation';


export default class App extends React.Component {
  render() {
    return (
   
      
      <AppStackNavigator/>
    
 
    )
  }
}

const AppStackNavigator = new StackNavigator({
  MoodChange: { screen: MoodChange },
  Feed: { screen: AppTabNavigation },
 
});

const styles = StyleSheet.create({
  container : {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems : 'center',
    justifyContent : 'center',
  }
});
