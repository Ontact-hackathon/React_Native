import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BNavigation from './BNavigation'
import Login from './Login';
import LogRegister from './LogRegister';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="LogRegister" component={LogRegister}/> */}
        <Stack.Screen name="BNavigation" component={BNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}