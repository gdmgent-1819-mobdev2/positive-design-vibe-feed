import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { getInstance } from '../services/firebase';

export default class Quote extends React.Component {
  state = {
    allQuotes: [],
    currentQuote: {},
  }

  componentWillMount() {
    this.getAllQuotes()
      .then(quotes => {
        this.setState({allQuotes: quotes})
        console.log(this.state.allQuotes)
      })
      .then(() => {
        this.getRandomQuote()
      })

      console.log(this.state.allQuotes)
  }

  convertObjectToArray = object => Object.keys(object).map(i => object[i])

  getAllQuotes = () => {
    const firebase = getInstance()
    return new Promise((resolve, reject) => {
      firebase.database().ref('quotes').once('value')
        .then(snapshot => snapshot.val())
        .then((quotes) => {
          quotes = this.convertObjectToArray(quotes)
          resolve(quotes)
        })
        .catch((error) => {
          reject(error)
        })
    }) 
  }

  getRandomQuote = () => {
    const randomItemIndex = Math.floor(Math.random() * this.state.allQuotes.length)
    const randomQuote = this.state.allQuotes[randomItemIndex]
    this.setState({currentQuote: randomQuote})
  }

  likeQuote = () => {
    const firebase = getInstance()
    const quoteId = this.state.currentQuote.quote_id
    let likes = this.state.currentQuote.likes

    likes++;

    firebase.database().ref(`quotes/${quoteId}/likes`).set({
      likes
    })
    
  }

  render() {
    console.log(this.state.currentQuote)
    return (
      <View>
        <Text>{ this.state.currentQuote['quote'] }</Text>
        <TouchableOpacity>
          <FontAwesome onPress={ this.likeQuote } name="heart"></FontAwesome>    
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="times"></FontAwesome>
        </TouchableOpacity>
      </View>
    );
  }
}