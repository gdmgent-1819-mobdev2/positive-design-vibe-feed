import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import * as firebase from 'firebase';


// Initialize Firebase
const config = {
  apiKey: "AIzaSyAx2xnpKzD6yOG1X5gENVi9LWWUg3eYDI4",
  authDomain: "vibefeed-a1f33.firebaseapp.com",
  databaseURL: "https://vibefeed-a1f33.firebaseio.com",
  projectId: "vibefeed-a1f33",
  storageBucket: "vibefeed-a1f33.appspot.com",
  messagingSenderId: "681887007137"
};
firebase.initializeApp(config);


export default class Addquote extends React.Component {
  

// Add quote to firebase
addQuote = (quote) => {
    firebase.database().ref('quotes/').push({
        likes: 0,
        quotes: quote,
        userMail: "olivier.decock1@hotmail.com",
    })
}



  render() {
    return (
      <Container style={styles.container}>
        {/* ADD QUOTE TO FIREBASE */}
        <Form>
          <Item floatingLabel>
            <Label>Add Quote</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(quote) => this.setState({quote})}
            />
          </Item>
            
          <Button full onPress={()=>this.addQuote(this.state.quote)}>
            <Text>Add quote</Text>
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
});
