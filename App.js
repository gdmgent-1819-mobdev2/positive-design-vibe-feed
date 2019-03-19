import React from 'react'
import {Text,View,StyleSheet} from 'react-native';
import { StackNavigator} from 'react-navigation';


import Feed from './app/screens/Feed';
import Quotes from './app/screens/Quotes';
import User from './app/screens/User';
import AppTabNavigation from './app/components/MainTabNavigation/MainTabNavigation';


export default class App extends React.Component {
  render() {
    return (
    // <AppStackNavigator/>,
     <AppTabNavigation style = { styles.tabNav}/>
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
  tabNav : {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent : 'space-between'
    }
});
