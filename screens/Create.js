import React, {useState} from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, ScrollView, TextInput, FlatList} from 'react-native'
import { ButtonBar } from '../components/ButtonBar'
import { useNavigation } from "@react-navigation/native";

const Create = () =>{
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ButtonBar/>
            <ScrollView contentContainerStyle={styles.ccreate}>

                <Text style={styles.title}>Crear Tweet</Text>

                <View style={styles.ccreatei}>

                    <TextInput
                    multiline
                    maxLength={240} 
                    style={styles.ti}
                    placeholder='Maximo 240 Caracteres'
                    />

                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Feed'), 
                        console.log('Presionaste el boton de Post')
                        
                    }}
                    style={styles.button}>
                        <Text style={styles.textbutton}>
                        Publicar Tweet
                        </Text>
                    </TouchableOpacity>

                </View>

            
            </ScrollView>
            
        </View>
    )

}
export default Create

    const styles = StyleSheet.create({

        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: 'center',
        
          },
          ccreate: {
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: 420
          
          },
          ccreatei: {
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: 400
      
          },
          title: {
            flex: 1,
            fontSize: 50,
            marginBottom: 50,
            marginTop:30,
            justifyContent: 'flex-start',
            fontWeight: 'bold'
        
        },
        ti: {
            borderWidth: 2,
            padding: 10,
            borderColor: "black",
            width: 350,
            height: 350,
            marginBottom: 10,
            fontSize: 18,
    
        },
        button: {
            backgroundColor: "gray",
            padding: 10,
            marginTop: 30,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            height: 50, 
            width: 250,
          
          },
          textbutton: {
            fontSize: 20,
            color: "white",
            
          },

    

    })

