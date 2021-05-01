import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './Navigation'
import Send from "./Send";
import MarkerFactory from "./MarkerFactory"
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="주머니속 현금"  component={Navigation} />
        <Stack.Screen name="송금"  component={Send} />
        <Stack.Screen name="mark"  component={MarkerFactory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}