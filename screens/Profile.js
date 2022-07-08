import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, ScrollView} from 'react-native'
import React, {useState} from 'react'
import { ButtonBar } from '../components/ButtonBar'
import { useNavigation } from "@react-navigation/native";
import Tweet from '../components/TweetBox';

const Profile = () => {
  const navigation = useNavigation();

    const [username, setUsername] = useState('CR7')
    const [seguidores, setSeguidores] = useState(70000000)
    const [seguidos, setSeguidos] = useState(70)
    const [nombre, setNombre] = useState('Cristiano Ronaldo')
    const [bio, setBio] = useState('Soy el mejor jugador, de este equipo perdedor, a todos soy superior, un chico estelar, no se que harian sin mi, si yo me fuera de aki, no verian mas hat tricks, todo seria vulgar.')
    const [direccion, setDireccion] = useState('Manchester')
    const [fecha, setFecha] = useState('05/02/1985')
    
  return (
    
    <View style={styles.container}>
    <ButtonBar/>  

      <ScrollView contentContainerStyle={styles.cuser}>

        <Text style={styles.username}>{username}</Text>
        

          <View style={styles.cfollow}>
            <Text style={styles.follows}>Followers: {seguidores}</Text>
            <Text style={styles.follows}>Following: {seguidos}</Text>
          </View>

          <View style={styles.cbio}>
            <Text style={styles.nombre}>Cristiano Ronaldo</Text>
            <Text style={styles.bio}>{bio}</Text>
            <Text style={styles.datosbio}>{fecha} {'\n'}{direccion}</Text>
          </View>

          <View style={styles.cbutton}>
            <TouchableOpacity
            onPress={() => {
            navigation.navigate('Settings'), 
            console.log('Presionaste el boton de Settings')
            }}
            style={styles.button}>
              <Text style={styles.textbutton}>
                Editar Perfil
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.text}>
            Tweets
          </Text>

          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>



      </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "white",

  },
  cuser: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 420

  },
  cfollow: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,

  },
  cbio: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'balck',
    backgroundColor: 'lightgray'
    

  },
  cbutton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },

  username: {
    marginTop: 20,
    fontSize: 50,
    color: "black",
    marginBottom: 10,
    fontWeight: 'bold'

  },
  nombre: {
    fontSize: 25,
    color: "black",
    marginBottom: 20,
    fontWeight: 'bold',
    padding: 10,

  },
  bio: {
    fontSize: 20,
    padding: 10,
  },
  datosbio: {
    fontSize: 15,
    color: "black",
    padding: 10,
  },

  follows: {
    fontSize: 15,
    color: "black",
    marginBottom: 15,
    fontWeight: 'bold'

  },
  textbutton: {
    fontSize: 20,
    color: "white",

  },
  button: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50, 
    width: 200,
    
},
  text: {
    marginTop: 30,
    fontSize: 30,
    color: "black",
    marginBottom: 10,
    fontWeight: 'bold'

  },
  

})

export default Profile