import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-ionicons';

import Feed from '../../screens/Feed';
import Quotes from '../../screens/Quotes';
import User from '../../screens/User';


export default class AppTabNavigation extends Component {

    render() {
        return (
            <MainTabNavigation screenProps={{ navigation: this.props.navigation }} />
        )
    }
}

const MainTabNavigation = new TabNavigator({
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
        screen: Quotes,
        navigationOptions: {
            tabBarLabel: 'Quotes',
            tabBarIcon: () => (
                <Ionicons name="quote" size={24} />
            )
        }
    },
    User: {
        screen: User,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
                <Ionicons name="person" size={24} />
            )
        }
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});