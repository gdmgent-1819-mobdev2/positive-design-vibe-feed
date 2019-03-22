import React from 'react'
import {View, Text,StyleSheet,Button} from 'react-native';

import Images from '../assets/images/index';
import SliderInput from '../components/SliderInput/SliderInput';
import ChangeImage from '../components/ChangeImage/ChangeImage';

this.state = {
    "imageId" : 3
}

function changeImage() {
    switch(this.state.imageId == 3){
        case 1:
        return  <Image source={Images.emote2}/>;
        break

        case 2:
        return  <Image source={Images.emote4}/>;
        break

        case 3:
        return  <Image source={Images.emote3}/>
        break

        case 4:
        return  <Image source={Images.emote5}/>;

        case 5:
        return <Image source={Images.emote1}/>
        break
        default:
        return  <Image source={Images.emote3}/>
        break
    }
}
 
export default class MoodChange extends React.Component {
  render() {
    return (

     <View style={styles.container}>
            changeImage();
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
