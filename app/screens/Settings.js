import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import { getInstance } from '../services/firebase'
import CustomHeader from '../components/CustomHeader';


// Initialize Firebase
const firebase = getInstance();

export default class Settings extends React.Component {

// Logout
logout = () => {
    firebase.auth().signOut();
}


  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader />
        <Button onPress={() => {this.props.navigation.navigate('Email')}}><Text>Change email</Text></Button>
        <Button onPress={() => {this.props.navigation.navigate('Password')}}><Text>Change password</Text></Button>
        
        {/* Logout */}
        <Button onPress={this.logout()}>
          <Text>Logout</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
