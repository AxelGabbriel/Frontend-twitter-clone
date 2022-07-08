import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from "@react-navigation/native";

export const ButtonBar = ({buttons, doSomethingAfterClick}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Feed'), 
        console.log('Presionaste el boton de Feed')
      }}
      style={styles.button}>
        <Text style={styles.textbutton}>Feed</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Search'), 
        console.log('Presionaste el boton de Busqueda')
      }}
      style={styles.button}>
        <Text style={styles.textbutton}>Busqueda</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Profile'), 
        console.log('Presionaste el boton de Perfil')
      }}
      style={styles.button}>
        <Text style={styles.textbutton}>Perfil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Login'), 
        console.log('Presionaste el boton de Salir')
      }}
      style={styles.button}>
        <Text style={styles.textbutton}>Salir</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        
    },
    textbutton: {
        fontSize: 20,
        color: "black",
        marginTop: 50

      },

})