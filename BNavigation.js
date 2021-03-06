import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './Home';
import Register from './Register';
import Chat from './Chat';

const Tab = createMaterialBottomTabNavigator();

export default function BNavigation({route}) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="white"
            labelStyle={{ fontSize: 12 }}
            barStyle={{ backgroundColor: '#7589E1' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
                initialParams={{userNum: route.params.userNum}}
            />
            <Tab.Screen
                name="Register"
                component={Register}
                options={{
                    tabBarLabel: 'Register',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="lead-pencil" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="chat" size={24} color={color} />
                    ),
                }}
                initialParams={{userId: route.params.userId}}
            />
        </Tab.Navigator>
    );
}