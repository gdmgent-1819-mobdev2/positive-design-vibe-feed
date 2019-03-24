import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { TabNavigator, TabBarBottom } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons';

import Feed from '../../screens/Feed';
import Quotes from '../../screens/Quotes';
import User from '../../screens/User';



export default class AppTabNavigation extends Component {

    render() {
        return (
            <MainTabNavigation screenProps={{ navigation: this.props.navigation }}/>
        )
    }
}

const MainTabNavigation = new TabNavigator({
    Quotes: {
        screen: Quotes,
        navigationOptions: {
            tabBarLabel: 'Quotes',
            tabBarIcon: () => <Icon name="md-quote" size={25}   color={'white'} />
            
        }
    },
    User: {
        screen: User,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => <Icon name="md-person" size={25}  color={'white'} />
        }
    },
    Feed: {
        screen: Feed,
        navigationOptions: {
            tabBarLabel: 'Statistics',
            tabBarIcon: () => <Icon name="md-stats" size={25} color={'white'} />
        },
        labelStyle: {
            fontSize: 12,
          }
    }
}, 
{
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom'
},

   
    
)

