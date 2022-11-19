
import React, {Component} from 'react';
import Header from './src/Common/Header';
import Createbiodata from './src/Components/Createbiodata';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Selecttheme from './src/Components/Selecttheme';

const Stack = createNativeStackNavigator();

export default function App () {
  
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#d81159',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          initialRouteName="Createbiodata">
          <Stack.Screen
            name="Createbiodata"
            component={Createbiodata}
            options={{title: 'home'}}
          />
          <Stack.Screen
            name="Selecttheme"
            component={Selecttheme}
            initialParams={{data:'xyz'}}
            options={{title: 'My Bio'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
