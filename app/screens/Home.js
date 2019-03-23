import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'

export default class Home extends React.Component {


render() {
    return (
      <View style={styles.container}>
        <Button full onPress={() => this.props.navigation.navigate('Login')}><Text>Sign in</Text></Button>
        <Button full onPress={() => this.props.navigation.navigate('Register')}><Text>Sign up</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
