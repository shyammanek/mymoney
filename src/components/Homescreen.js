import { Text, View , StyleSheet, Dimensions,} from 'react-native'
import React, { Component } from 'react'
import {Colors } from '../Common/Colors'

export default class Homescreen extends Component {
  render() {
    return (
      <View style={style.container}>
       
       <View style={style.card} >
            <Text style={style.text}> Add spend</Text>
       </View>

       <View style={style.card} >
            <Text style={style.text}> View spend</Text>
       </View>

       <View style={style.card} >
            <Text style={style.text}> Add spend</Text>
       </View>

      </View>
    )
  }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    card:{
        backgroundColor: Colors.red,
        height: Dimensions.get('window').height*0.3,
        width: Dimensions.get('window').width*0.5,
        margin: 15,
        borderRadius: 10,
        elevation: 5,

    },

    }

})