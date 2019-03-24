import React from 'react';
import { StyleSheet, Text, View, StatusBar, ListView, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Icon, List, ListItem } from 'native-base'
import { getInstance } from '../services/firebase'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CustomHeader from '../components/CustomHeader';


const firebase = getInstance()

 
let data = []

export default class Profile extends React.Component {


  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    
    this.state = {
      ListViewData: data,
      newContact: ""
    }
  }

  componentDidMount() {
    
    let that = this

    const userId = firebase.auth().currentUser.uid

    firebase.database().ref(`/likes_user/${userId}`).on('child_added', function (data) { //z2Ew.. moet vervangen worden door current user
      let newData = [...that.state.ListViewData]
      newData.push(data)
      that.setState({ListViewData : newData})
    })

  }

  async deleteRow(secId, rowId, rowMap, data) {

    const userId = firebase.auth().currentUser.uid
    
    await firebase.database().ref(`/likes_user/${userId}` + data.key).set(null) //z2Ew.. moet vervangen worden door current user

    rowMap[`${secId}${rowId}`].props.closeRow();
    let newData = [...this.state.ListViewData];
    newData.splice(rowId, 1)
    this.setState({ListViewData:newData})

  }


  render() {
  
    return (
      <Container>
        <CustomHeader />
        <Content style={styles.Content}>
          <List
            enableEmptySections
            dataSource={this.ds.cloneWithRows(this.state.ListViewData)}
            renderRow={data =>
              <ListItem>
                <Text style={styles.Text}>"{data.val().quote}"</Text>
              </ListItem>
            }
            renderLeftHiddenRow={data =>
              <Button onPress={()=>this.addRow(data)}>
                <Icon name="information-circle"/>
              </Button>
            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button danger onPress={()=>this.deleteRow(secId, rowId, rowMap, data)}>
                <Icon name="trash"/>
              </Button>
            }
            rightOpenValue={-75}
          />
        </Content>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Quote')}} style={styles.touchPlus} >
          <FontAwesome style={styles.plus}  name="plus"></FontAwesome>
        </TouchableOpacity>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  Content: {
    width: "80%",
    marginLeft: "10%",
    marginTop: 50,
  },

  Text: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#110500',
    color: '#110500'
  },

  touchPlus: {
    position: 'absolute',
    right: 10,
    bottom: 10
  },

  plus: {
    color: '#FCBE5B',
    fontSize: 60,
  },
});