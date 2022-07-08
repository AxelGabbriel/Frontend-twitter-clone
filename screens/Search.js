import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, ScrollView, TextInput} from 'react-native'
import React from 'react'
import { ButtonBar } from '../components/ButtonBar'

const Search = () => {

  return (
    <View style={styles.container}>
            <ButtonBar/>
            <ScrollView contentContainerStyle={styles.containerinicio}>

                <TextInput
                  style={styles.textinput}
                  placeholder='@username'
                />
      
            </ScrollView>
            
        </View>
    
  )
}
export default Search

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',

  },
  containerinicio: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 420
  
  },
  textinput: {
      flex: 1,
      fontSize: 20,
      color: "black",
      marginTop:30,
      justifyContent: 'flex-start',
      borderWidth: 2,
      padding: 10,
      borderColor: "black",
      width: 350,
      backgroundColor: "lightgray",
      marginBottom: 10,
      borderRadius: 10
  
  },

})

