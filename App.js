import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import Main from './app/Main'

export default class App extends React.Component {


render() {
    return (
      <View style={styles.container}> 
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
