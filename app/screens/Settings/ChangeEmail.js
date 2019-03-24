import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import { getInstance } from '../../services/firebase';

const firebase = getInstance()

export default class ChangeEmail extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = ({
            email: "",
            password: "",
            newPassword: "",
            currentPassword: "",
            newEmail: "",
        })
    }
    

// Chance email
onChangeEmailPress = () => {

this.reauthenticate(this.state.currentPassword).then(() => {

    let user = firebase.auth().currentUser;
    user.updateEmail(this.state.newEmail).then(() => {
    alert.alert("Email was changed");
    }).catch((error) => {
    alert.alert(error.message);
    }) 

}).catch((error) => {
    alert.alert(error.message);
})
    
}

  render() {
    return (
      <Container style={styles.container}>
        
        {/* CHANCE EMAIL */}
        <Input value={this.state.newEmail}
          placeholder="newEmail"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => {this.setState({newEmail: text})}}
        />

        <Button onPress={this.onChangeEmailPress}>
          <Text>Change email</Text>
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
