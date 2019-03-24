import React from 'react'
import {View, Image,StyleSheet,Slider, Button,Text} from 'react-native';
import Images from '../assets/images';
import { getInstance } from '../services/firebase';

export default class MoodChange extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      mood: ''
    }
   }

   storeData = (mood) => {
    const firebase = getInstance() 
    const userId = 'fDbQFFvKQ1YWqTJ6EJmEKRJASS42'
    const date = new Date()
    const key = firebase.database().ref('mood_user').push().getKey()
    firebase.database().ref(`mood/${userId}`).set({
      uid:'acbhj1hFwohuQvJWCSeXpZB90sC3',
      mood_id: key,
      mood: this.state.mood,
      created_at: date.toLocaleString(),
      deleted_at: '',

    })
    this.setState({mood:''})
    this.props.navigation.navigate('App')
   }

   changeImage() {
    switch(this.state.mood){
        case 1:
          return  Images.emote2;
          break

        case 2:
          return  Images.emote4;
          break

        case 3:
          return  Images.emote3;
          break

        case 4:
          return  Images.emote5;
          break

        case 5:
          return Images.emote1;
          break

        default:
          return  Images.emote3;
          break
    }
}


  render() {
    return (

     <View style={styles.container}>
        <Text style={styles.baseText}>How are you feeling ?</Text>
        <Image source={this.changeImage()} />
        <Slider
          style={{ width: 300 }}
          step={1}
          minimumValue={1}
          maximumValue={5}
          value={this.state.val}
          thumbTintColor={'#00A6DB'}
          onValueChange={val => this.setState({ mood: val })}
          onSlidingComplete={(mood)=>this.setState({mood})}
        />
        <Button title='Confirm' style= {styles.button} onPress={()=>this.storeData(this.state.mood)}/>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: '#fff',
    alignItems : 'center',
    justifyContent : 'center',
  },
  baseText : {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3E3C63'
  },
  button: {
    backgroundColor: '#FCBE5B',
    color: '#fff',
    width: '40%',
    marginTop: 30,
    marginLeft: '30%',
    paddingTop: 15,
    paddingBottom: 15,
    elevation: 0
  },
});