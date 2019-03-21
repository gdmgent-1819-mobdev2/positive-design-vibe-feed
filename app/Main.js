import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddQuote, Quote } from './components';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Quote />
      </View>
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