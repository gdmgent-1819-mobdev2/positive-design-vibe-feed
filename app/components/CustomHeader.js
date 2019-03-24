import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Header } from 'native-base'


export default class CustomHeader extends React.Component {

  render() {
  
    return (
      
      <Header style={styles.header}>
        <Image style={styles.image} source={require('../assets/images/Vibefeed-logo.png')} />
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
    elevation: 0
  }, 
  image: {
    height: 65,
    width: 75.58,
    position: 'absolute',
    left: 0 
  }
});