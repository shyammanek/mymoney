import {Text, View, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {Colors} from '../Common/Colors';
import Header from '../Common/Header';
export default class Homescreen extends Component {
  render() {
    return (
      <View>
        <Header />

        <View style={style.container}>
          <View style={style.card}>
            <Text style={style.heading}> Add spend</Text>
          </View>

          <View style={style.card}>
            <Text style={style.heading}> View spend</Text>
          </View>

        </View>
        
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    backgroundColor: Colors.red,
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.4,
    margin: 15,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    flex: 0.5,
  },
  heading: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginVertical: 65,
    marginHorizontal: 10,
  },
});
