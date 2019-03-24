import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
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
      <Container>
        <CustomHeader />
        <Button style={styles.Button} onPress={() => {this.props.navigation.navigate('Email')}}><Text style={styles.Text}>Change email</Text></Button>
        <Button style={styles.Button} onPress={() => {this.props.navigation.navigate('Password')}}><Text style={styles.Text}>Change password</Text></Button>
        
        {/* Logout */}
        <Button style={styles.Button} onPress={this.logout()}>
          <Text style={styles.Text}>Logout</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  Button: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#fff',
    elevation: 0,
    width: '100%'
  },

  Text: {
    textAlign:'center',
    marginLeft: 50,
    color: '#110500'
  }
});
