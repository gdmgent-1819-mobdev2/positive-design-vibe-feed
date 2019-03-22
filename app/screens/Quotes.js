import React from 'react'

import {View, Text,StyleSheet,Button} from 'react-native';
 
export default class Quotes extends React.Component {
  render() {
    return (

     <View style={styles.container}>

        <Text>Hello from Quote</Text>
        <Button title ='Profile' onPress={()=> this.props.navigation.navigate 
        ('User')}/>
        <Button title ='Feed' onPress={()=> this.props.navigation.navigate 
        ('Feed')}/>
        <Button title ='Quotes' onPress={()=> this.props.navigation.navigate 
        ('Quotes')}/>
        <Button title ='MoodChange' onPress={()=> this.props.navigation.navigate 
        ('MoodChange')}/>
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
