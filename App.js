import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from "react-native"
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './screens/Login'
import Register from "./screens/Register"
import Profile from "./screens/Profile"
import Settings from "./screens/Settings"
import Search from "./screens/Search"
import Feed from "./screens/Feed"
import Create from "./screens/Create"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name='Settings' component={Settings}/>
          <Stack.Screen name='Search' component={Search}/>
          <Stack.Screen name='Feed' component={Feed}/>
          <Stack.Screen name='Create' component={Create}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

