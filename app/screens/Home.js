import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import CustomHeader from '../components/CustomHeader';


export default class Home extends React.Component {


render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/images/Vibefeed-logo.png')} />
        <Button style={styles.Button} onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.Text}>Sign in</Text></Button>
        <Button style={styles.Button} onPress={() => this.props.navigation.navigate('Register')}><Text style={styles.Text}>Sign up</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight
  },

  image: {
    width: "80%",
    height: 250,
    marginBottom: 80,
    alignItems: 'center'

  },

  Button: {
    width: "80%",
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "10%",
    color: '#FCBE5B',
    borderColor: '#FCBE5B',
    borderWidth: 3,
    borderRadius: 0,
    elevation: 0
  },

  Text: {
    color: '#FCBE5B',
    marginLeft: 115 //Moet nog text align center worden
  }
});
