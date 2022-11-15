import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {Colors} from '../Common/Colors';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>My Expances</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.red,
    height: 50,
    // marginLeft: 10,
  },
  headerText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 5,
  },
});
