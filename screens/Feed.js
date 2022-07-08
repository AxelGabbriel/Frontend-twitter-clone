import React, {useState} from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, ScrollView} from 'react-native'
import { ButtonBar } from '../components/ButtonBar'
import Tweet from "../components/TweetBox";
import { useNavigation } from "@react-navigation/native";

const Feed = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ButtonBar/>
            <ScrollView contentContainerStyle={styles.cfeed}>

                <TouchableOpacity
                    onPress={() => {
                    navigation.navigate('Create'), 
                    console.log('Presionaste el boton de Create')
                    }}
                    style={styles.button}>
                    <Text style={styles.textbutton}>
                        Hacer un Tweet
                    </Text>
                </TouchableOpacity>

                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
      
            </ScrollView>
            
        </View>
    )
}
export default Feed


const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: "whitesmoke",
  
    },
    cfeed: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "whitesmoke",
        width: 420
    
    },
    button: {
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 50, 
        width: 200,
        marginBottom: 20,
        marginTop: 20,
        
    },
    textbutton: {
        fontSize: 20,
        color: "white",
    
      },

})