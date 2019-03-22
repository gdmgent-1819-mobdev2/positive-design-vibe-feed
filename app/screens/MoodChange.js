import React from 'react'
import {View, Image,StyleSheet,Slider, Button} from 'react-native';
import Images from '../assets/images';

export default class MoodChange extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      value: 3
    }
   }

   changeImage() {
    switch(this.state.value){
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
        <Image source={this.changeImage()} />
        <Slider
          style={{ width: 300 }}
          step={1}
          minimumValue={1}
          maximumValue={5}
          value={this.state.val}
          onValueChange={val => this.setState({ value: val })}
          onSlidingComplete={ val => console.log(this.state.value)}
        />
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
});
