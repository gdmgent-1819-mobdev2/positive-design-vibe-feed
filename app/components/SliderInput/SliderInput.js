import React,{Component} from 'react';
import {Slider,StyleSheet,View,Text} from 'react-native';

export default class SliderInput extends Component {


    constructor(props) {
        super(props)
        this.state = { 
          value: 3 
        }
       }

       getVal(val){
       console.warn(val);
       }     
       render() {    
     
         return (
           <View style={styles.container}>
             <Slider
              style={{ width: 300 }}
              step={1}
              minimumValue={1}
              maximumValue={5}
              value={this.state.val}
              onValueChange={val => this.setState({ value: val })}
              onSlidingComplete={ val => this.getVal(val)}
             />
             <Text style={styles.welcome}>
               {this.state.val}
             </Text>            
           </View>
         );
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

