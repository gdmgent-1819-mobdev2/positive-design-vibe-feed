import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { getInstance } from '../services/firebase';
import CustomHeader from '../components/CustomHeader';


const firebase = getInstance()

export default class Quote extends React.Component {
  state = {
    allQuotes: [],
    currentQuote: {},
  }

  componentWillMount = () => {
    this.getNewQuotes()
  }

  getNewQuotes = () => {
    this.getAllQuotes()
      .then(quotes => {
        this.setState({allQuotes: quotes})
      })
      .then(() => {
        this.getRandomQuote()
      })
  }

  convertObjectToArray = object => Object.keys(object).map(i => object[i])

  getAllQuotes = () => {
    return new Promise((resolve, reject) => {
      firebase.database().ref('quotes').once('value')
        .then(snapshot => snapshot.val())
        .then((quotes) => {
          const quotesNotUsers = [];
          quotes = this.convertObjectToArray(quotes)
          for(let i = 0; i < quotes.length; i++) {
            if(quotes[i].uid != firebase.auth().currentUser.uid) {
              const quote = quotes[i]
              quotesNotUsers.push(quote)
            }
          }
          resolve(quotesNotUsers)
        })
        .catch((error) => {
          reject(error)
        })
    }) 
  }

  getRandomQuote = () => {
    const randomItemIndex = Math.floor(Math.random() * this.state.allQuotes.length)
    const randomQuote = this.state.allQuotes[randomItemIndex]
    // this.getLikesUser()
    //   .then(likesUser => {
    //     for(let i = 0; likesUser.length; i++){
    //       if(likesUser[i].quote_id === randomQuote.quote_id) {
    //         if(i == this.state.allQuotes.length - 1) {
    //           this.setState({currentQuote: "Je hebt alle quotes gehad, kom later terug voor meer!"})
    //           break;
    //         }
    //         this.getRandomQuote()
    //       }
    //       else {
            this.setState({currentQuote: randomQuote})
            // break
      //     }
      //   }
      // })
    
  }

  getLikesUser = () => {
    const userId = firebase.auth().currentUser.uid;
    return new Promise((resolve, reject) => {
      firebase.database().ref(`likes_user/${userId}`).once('value')
        .then(snapshot => snapshot.val())
        .then(likesUser => {
          if (likesUser === null) {
            likesUser = [];
          }
          else {
            likesUser = this.convertObjectToArray(likesUser)
          }
          resolve(likesUser)
        })
        .catch((error) => {
          reject(error)
        })
    })

  }

  likeQuote = () => {
    const quote = this.state.currentQuote;
    const quoteId = this.state.currentQuote.quote_id;
    const userId = firebase.auth().currentUser.uid
    let likes = this.state.currentQuote.likes
    likes++;
    console.log(quote)

    this.getLikesUser()
      .then(likesUser => {
        if(!likesUser.includes(quote)) {
          likesUser.push(quote)
          firebase.database().ref(`likes_user/${userId}`).set(likesUser)
          firebase.database().ref(`quotes/${quoteId}/likes`).set(likes)
        }
      })
      .then(() => {
        this.getNewQuotes()
      })
  }

  dislikeQuote = () => {
    this.getNewQuotes()
  }

  render() {
    if (typeof this.state.currentQuote !== 'string')  {
      return (
        <View>
          <CustomHeader />
          <Text>"{ this.state.currentQuote.quote }"</Text>
          <Text>{ this.state.currentQuote.likes }</Text>
          <Text>user#{ this.state.currentQuote.uid }</Text>
          <TouchableOpacity onPress={ this.likeQuote }>
            <FontAwesome name="heart"></FontAwesome>    
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.dislikeQuote } >
            <FontAwesome name="times"></FontAwesome>
          </TouchableOpacity>
        </View>
      )
    }
    else {
      return(
        <View>
          <Text>{this.state.currentQuote}</Text>    
        </View>
      )
    }
  }
}