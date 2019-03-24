import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { getInstance } from '../services/firebase';

const styles =  StyleSheet.create({
  containerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    width: '90%',
    height:70,
    textAlign: 'center',
    color: '#000',
    borderBottomWidth: 0.3,
    borderBottomColor: '#110500',
    fontSize: 20,
    marginTop: 20
  },

  title: {
    width: '70%',
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FCBE5B'
  },
  buttonAdd: {
    marginTop: 20,
    height: 64,
    width: 167,
    backgroundColor: '#FCBE5B',
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    color: '#fff',
  }

})

const firebase = getInstance()


export default class AddQuote extends React.Component {
  state = {
    newQuote: '',
  }

  changeQuote = (value) => {
    this.setState({newQuote: value})
  }

  addQuoteToFirebase = () => {
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
        <View style={styles.containerContent}>
          <Text style={styles.title}>Want to add your own quote?</Text>
          <TextInput 
            style={styles.inputField}
            placeholder="Quote"
            value={this.state.newQuote}
            onChangeText={this.changeQuote}
          />
          <TouchableOpacity style={styles.buttonAdd} onPress={this.addQuoteToFirebase}>
            <Text style={styles.textButton}>ADD</Text>
          </TouchableOpacity>
        </View>
    );
  }
}