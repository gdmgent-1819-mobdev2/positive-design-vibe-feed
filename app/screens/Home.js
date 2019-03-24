import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import CustomHeader from '../components/CustomHeader';


export default class Home extends React.Component {


render() {
    return (
      <View style={styles.container}>
      <CustomHeader />
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
