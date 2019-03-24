import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { getInstance } from '../services/firebase';
import CustomHeader from '../components/CustomHeader';


const firebase = getInstance()

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    
  },
  header: {
    height: 100,
    

  },
  content: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
  },
  quote: {
    backgroundColor: '#F8F8F8',
    width: '80%',
    height: 250,
    paddingTop: 20,
    paddingBottom: 50,
    paddingRight: 20,
    paddingLeft: 20,
  },
  
  quoteText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FCBE5B'

  },

  quoteUser: {
    textAlign: 'right',
  },

  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50
  },

  likesIcon: {
    marginRight: 5,
    color: '#E74C3C'
  },

  buttons: {
    flex:1,
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#F8F8F8',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLike: {
    fontSize: 30,
    color: '#63BB91'

  },
  iconDislike: {
    fontSize: 35,
    color: '#EC6E70'

  }
  
})

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
    this.setState({currentQuote: randomQuote})
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
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <CustomHeader />
          </View>
          <View style={styles.content}>
            <View style={styles.quote}>
              <Text style={styles.quoteText}>"{ this.state.currentQuote.quote }"</Text>
              <Text style={styles.quoteUser}>user#{ this.state.currentQuote.uid }</Text>
              <View style={styles.likes}>
                <FontAwesome style={styles.likesIcon} name="heart"></FontAwesome>    
                <Text style={styles.likesNumber}>{ this.state.currentQuote.likes }</Text>
              </View>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button} onPress={ this.likeQuote }>
                <FontAwesome style={styles.iconLike} name="heart"></FontAwesome>    
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={ this.dislikeQuote } >
                <FontAwesome style={styles.iconDislike} name="times"></FontAwesome>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }
  
}