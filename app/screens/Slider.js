import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'

export default class Slider extends React.Component {


render() {
    return (
      <View style={styles.container}>
        <Text>Slider</Text>
        <Button onPress={this.props.navigation.navigate('')} title="Quotes"></Button>
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