import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from './src/Common/Header'

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text>App</Text>
      </View>
    )
  }
}