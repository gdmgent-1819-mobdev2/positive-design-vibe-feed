import React from 'react'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'

import { Feed, Quote, Profile, Settings, Home, Signup, Signin, MoodChange, AddQuote } from '../screens/index'
import ChangeEmail  from '../screens/Settings/ChangeEmail'
import ChangePassword  from '../screens/Settings/ChangePassword'
import Ionicons from '@expo/vector-icons/Ionicons';

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
    Settings: {
      screen: Settings
    },
    Quote: {
      screen: AddQuote
    }

  }, 
  {
    initialRouteName: 'Profile'
  }
)

const SettingsNavigator = createStackNavigator({
  Settings: {
    screen: Settings
  },
  Email: {
    screen: ChangeEmail
  },
  Password: {
    screen: ChangePassword
  },


  }
)

const MainNavigator = createBottomTabNavigator({
  Slider: {
    screen: MoodChange,
    navigationOptions: {
        tabBarLabel: 'Emotion',
        tabBarIcon: () => (
            <Ionicons name="paper" size={24} />
        )
    }
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: () => (
            <Ionicons name="paper" size={24} />
        )
    }
  },
  Quotes: {
      screen: Quote,
      navigationOptions: {
          tabBarLabel: 'Quotes',
          tabBarIcon: () => (
              <Ionicons name="quote" size={24} />
          )
      }
  },
  Profile: {
      screen: Profile,
      navigationOptions: {
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
              <Ionicons name="person" size={24} />
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
  Settings: SettingsNavigator,

})

export default createAppContainer(SwitchNavigation)
