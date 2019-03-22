import React from 'react'
import {Text,View,StyleSheet} from 'react-native';

import { StackNavigator} from 'react-navigation';
import Feed from './app/screens/Feed';
import Quotes from './app/screens/Quotes';
import User from './app/screens/User';
import MoodChange from './app/screens/MoodChange';
import AppTabNavigation from './app/components/MainTabNavigation/MainTabNavigation';


export default class App extends React.Component {
  render() {
    return (
   
      
      <AppTabNavigation/>
    
 
    )
  }
}

const AppStackNavigator = new StackNavigator({
  Quotes: { screen: Quotes},
  User :{ screen: User},
  Feed : { screen : Feed},
  MoodChange : {screen : MoodChange}


})
const styles = StyleSheet.create({

  container : {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems : 'center',
    justifyContent : 'center',
  }
});
