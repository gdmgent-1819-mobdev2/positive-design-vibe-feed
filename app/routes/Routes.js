import React, {Component } from 'react'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'

import Home from '../screens/Home';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';

const HomeLoginNavigator =  createStackNavigator({
    Home: {
      screen: Home
    },
    Register: {
      screen: Signup
    },
    Login: {
      screen: Signin
    }
  }, 
  {
    initialRouteName: "Home"
  }
)

export default createAppContainer(HomeLoginNavigator)
