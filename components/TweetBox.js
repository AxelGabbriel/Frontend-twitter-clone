import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, ScrollView} from 'react-native'
import React, {useState} from 'react'

const Tweet = () => {
    return (

        <View style={styles.container}>

            <View style={styles.containeruser}>
                <Text style={styles.nombre}>Cristiano Ronaldo</Text>
                <Text style={styles.username}>@cristiano</Text>
                <Text style={styles.fecha}>07/07/2022</Text>
            </View>

            <Text style={styles.content}>It's always impossible to hide the comfort that the @cr7cristianoronaldo Underwear collection provides and the fun that we have every time we shoot a campaign.</Text>

            <View style={styles.containerpd}>
                <Text style={styles.postdata}>Likes: 15260</Text>
                <Text style={styles.postdata}>Retweets: 1368</Text>
            </View>

          </View>



    )
}

export default Tweet


const styles =StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        padding: 10,
        marginBottom: 20,
        marginTop: 20,
        width: 400,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
    
      },
      containeruser: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'left',
        width: 350
        
      },
      containerpd: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 350
        
      },
      nombre: {
        fontSize: 18,
        marginBottom: 0,
        fontWeight: 'bold',
        padding: 10,
    
      },
      username: {
        fontSize: 15,
        marginBottom: 0,
        padding: 10,
    
      },
      content: {
        fontSize: 15,
        color: "black",
        padding: 10,
        width: 350,
      },
      fecha: {
        fontSize: 12,
        padding: 10,
      },
      postdata: {
        fontSize: 18,
        marginBottom: 0,
        fontWeight: 'bold',
        padding: 10,
    
      },


})