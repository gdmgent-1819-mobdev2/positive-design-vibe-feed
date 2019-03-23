import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Header } from 'native-base'


export default class App extends React.Component {

  render() {
  
    return (
      
      <Header style={styles.header}>
        <Image style={styles.image} source={require('./assets/Vibefeed-logo.png')} />
      </Header>
      
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    backgroundColor: '#FCBE5B',
    height: 65,
    marginTop: StatusBar.currentHeight,
  }, 
  image: {
    height: 65,
    width: 75.58,
    marginRight: 250, // Peu foefelaré, zou gewoon align left moeten kunnen worden
  }
});
