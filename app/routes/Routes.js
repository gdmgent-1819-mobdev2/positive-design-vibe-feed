import React from 'react'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'

import { Feed, Quote, Profile, Settings, Home, Signup, Signin, MoodChange, AddQuote } from '../screens/index'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const HomeLoginNavigator =  createStackNavigator({
    Home: {
      screen: Home
    },
    Register: {
      screen: Signup
    },
    Login: {
      screen: Signin
    },
  }, 
  {
    initialRouteName: 'Home'
  }
)

const ProfileNavigator =  createStackNavigator({
    Profile: {
      screen: Profile
    },
    Quote: {
      screen: AddQuote
    }

  }, 
  {
    initialRouteName: 'Profile'
  }
)

const MainNavigator = createBottomTabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: () => (
          <FontAwesome name="rss" size={24}/> 
        )
    }
  },
  Quotes: {
      screen: Quote,
      navigationOptions: {
          tabBarLabel: 'Quotes',
          tabBarIcon: () => (
            <FontAwesome name="quote" size={24}/> 
          )
      }
  },
  Profile: {
      screen: Profile,
      navigationOptions: {
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
              <FontAwesome name="profile" size={24} />
          )
      }
  }
},
{
  initialRouteName: 'Quotes' 
})

const SwitchNavigation = createSwitchNavigator({
  Home: HomeLoginNavigator,
  App: MainNavigator,
  Profile: ProfileNavigator,
})

export default createAppContainer(SwitchNavigation)
