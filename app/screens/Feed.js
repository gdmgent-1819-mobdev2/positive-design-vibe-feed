import React from 'react'

import {View, Text, StyleSheet} from 'react-native';
import CustomHeader from '../components/CustomHeader';

 
export default class Feed extends React.Component {
  render() {
    return (

     <View style = { styles.container}>
      <CustomHeader />
       <Text>Hello from feed</Text>
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
