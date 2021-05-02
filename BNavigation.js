import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './Home';
import Register from './Register';
import Profile from './Profile';

const Tab = createMaterialBottomTabNavigator();

export default function BNavigation({route}) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="white"
            labelStyle={{ fontSize: 12 }}
            barStyle={{ backgroundColor: 'skyblue' }}
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
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="face-profile" color={color} size={26} />
                    ),
                }}
                initialParams={{userId: route.params.userId}}
            />
        </Tab.Navigator>
    );
}