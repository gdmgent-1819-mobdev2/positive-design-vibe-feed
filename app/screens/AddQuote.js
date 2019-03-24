import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { getInstance } from '../services/firebase';
import CustomHeader from '../components/CustomHeader';


export default class AddQuote extends React.Component {
  state = {
    newQuote: '',
  }

  changeQuote = (value) => {
    this.setState({newQuote: value})
  }

  addQuoteToFirebase = () => {
    const firebase = getInstance()
    if (this.state.newQuote.trim() !== ''){
      const date = new Date()
      const user = firebase.auth().currentUser
      const key = firebase.database().ref('quotes').push().getKey()
      firebase.database().ref(`quotes/${key}`).set({
        uid: user.uid,
        quote_id: key,
        quote: this.state.newQuote,
        likes: 0,
        created_at: date.toLocaleString(),
        deleted_at: '',
      })
      alert('Quote added')
      this.setState({newQuote: ''})
    }
    else {
      this.setState({newQuote: ''})
      return
    }
  }

  render() {
    return (
      <View>
        <CustomHeader />
        <Text>Want to add your own quote?</Text>
        <TextInput 
          placeholder="Quote"
          value={this.state.newQuote}
          onChangeText={this.changeQuote}
        />
        <Button title="Add quote" onPress={this.addQuoteToFirebase}></Button>
      </View>
    );
  }
}