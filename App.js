import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from './src/Common/Header'
import Homescreen from './src/components/Homescreen'
import Alldata from './src/components/Alldata'
import CreateSpendData from './src/components/CreateSpendData'
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';



// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: Homescreen,
//   },
//   AllData: {
//     screen: Alldata,
//   },
//   CreateSpendData: {
//     screen: CreateSpendData,
//   },

// },
//   {
//     initialRouteName: 'Home',
//   }
// );






export default class App extends Component {


  render() {
    return (
      <View>
        <Homescreen />
      </View>
    )
  }
}