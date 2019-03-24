import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddQuote, Quote, Signin, Signup, Settings, Home, MoodChange } from './screens';
import Routes from './routes/Routes'

export default class Main extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});