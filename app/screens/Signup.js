import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import { getInstance } from '../services/firebase'
import CustomHeader from '../components/CustomHeader';



// Initialize Firebase
const firebase = getInstance()


export default class Signup extends React.Component {
  

constructor(props) {
    super(props)

    this.state = ({
        email: "",
        password: "",
    })
}


// Sign user up
signUpUser = (email, password) => {

try {
    if (this.state.password.length < 6) {
    alert("Password is to short")
    return;
}

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.props.navigation.navigate('Mood')
    })
} catch (error) {
    Alert.alert(error.toString())
    }
}



  render() {
    return (
        <Container style={styles.container}>
         <Form>
          <Item floatingLabel
          style={styles.Item}
          >
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              au toCapitalize="none"
              onChangeText={(email) => this.setState({email})}
            />
          </Item>

          <Item floatingLabel
          style={styles.Item}
          >
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({password})}
            />
          </Item>

          <Button style={styles.Button} onPress={()=>this.signUpUser(this.state.email,this.state.password)}>
            <Text style={styles.Text}>Sign Up</Text>
          </Button>
            </Form>
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

  Item: {
    borderColor: '#110500',
    borderBottomWidth: 0.3,
    borderRadius: 0,
    width: '80%',
    marginLeft: '10%',
    marginTop: 10
  },

  Button: {
    backgroundColor: '#FCBE5B',
    color: '#fff',
    width: '40%',
    marginTop: 30,
    marginLeft: '30%',
    paddingTop: 15,
    paddingBottom: 15, 
    elevation: 0
  },

  Text: {
    color: '#fff',
    marginLeft: 50
  }
});
