import React from 'react'

import {View,StyleSheet,Text} from 'react-native';
 
export default class User extends React.Component {
  render() {
    return (

     <View styles={styles.container}>
        <Text>User doing fun stuff</Text>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});