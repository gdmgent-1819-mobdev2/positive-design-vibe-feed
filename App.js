import React from 'react'
import {Text,View,StyleSheet} from 'react-native';
import { StackNavigator} from 'react-navigation';

import Feed from './app/screens/Feed';
import Quotes from './app/screens/Quotes';
import User from './app/screens/User';


export default class App extends React.Component {
  render() {
    return (
     <AppStackNavigator/>
    )
  }
}

const AppStackNavigator = new StackNavigator({
  Quotes: { screen: Quotes},
  User :{ screen: User},
  Feed : { screen : Feed}


})
const styles = StyleSheet.create({

  container : {
    flex:1,
    backgroundColor: '#fff',
    alignItems : 'center',
    justifyContent : 'center',
  },
});
