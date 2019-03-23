import React from 'react';
import { StyleSheet, Text, View, StatusBar, ListView } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Icon, List, ListItem } from 'native-base'
import * as firebase from 'firebase';


// Initialize Firebase
const config = {
  apiKey: "AIzaSyAx2xnpKzD6yOG1X5gENVi9LWWUg3eYDI4",
  authDomain: "vibefeed-a1f33.firebaseapp.com",
  databaseURL: "https://vibefeed-a1f33.firebaseio.com",
  projectId: "vibefeed-a1f33",
  storageBucket: "vibefeed-a1f33.appspot.com",
  messagingSenderId: "681887007137"
};
firebase.initializeApp(config);

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

    firebase.database().ref('/likes_user/z2EWz2LHjvcfLhrdHEspzKFm34J3').on('child_added', function (data) { //z2Ew.. moet vervangen worden door current user
      let newData = [...that.state.ListViewData]
      newData.push(data)
      that.setState({ListViewData : newData})
    })

  }

  async deleteRow(secId, rowId, rowMap, data) {
    
    await firebase.database().ref('likes_user/z2EWz2LHjvcfLhrdHEspzKFm34J3/' + data.key).set(null) //z2Ew.. moet vervangen worden door current user

    rowMap[`${secId}${rowId}`].props.closeRow();
    let newData = [...this.state.ListViewData];
    newData.splice(rowId, 1)
    this.setState({ListViewData:newData})

  }


  render() {
  
    return (
      <Container style={styles.container}>
        <Content style={{ marginTop: StatusBar.currentHeight}}>
          <List
            enableEmptySections
            dataSource={this.ds.cloneWithRows(this.state.ListViewData)}
            renderRow={data =>
              <ListItem>
                <Text>{data.val().quote}</Text>
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
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
