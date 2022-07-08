import React, {useState} from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, ScrollView, TextInput, FlatList} from 'react-native'
import { ButtonBar } from '../components/ButtonBar'
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <ButtonBar/>
            <ScrollView contentContainerStyle={styles.csettings}>

                <Text style={styles.title}>Editar Perfil</Text>

                <View style={styles.csettingsi}>

                    <Text style={styles.text}>
                        Username:
                    </Text>
                    <TextInput
                    maxLength={20} 
                    style={styles.ti}
                    />

                    <Text style={styles.text}>
                        Nombre:
                    </Text>
                    <TextInput
                    maxLength={20}  
                    style={styles.ti}
                    />

                    <Text style={styles.text}>
                        Direccion:
                    </Text>
                    <TextInput
                    maxLength={100}
                    style={styles.ti}
                    />

                    <Text style={styles.text}>
                        Fecha de Nacimiento:
                    </Text>
                    <View style={styles.cdate}>
                    <TextInput 
                    keyboardType='number-pad'
                    style={styles.tidate}
                    placeholder={'dia'}
                    />
                    <TextInput 
                    keyboardType='number-pad'
                    style={styles.tidate}
                    placeholder={'mes'}
                    />
                    <TextInput 
                    keyboardType='number-pad'
                    style={styles.tidate}
                    placeholder={'año'}
                    />
                    </View>
                    

                    <Text style={styles.text}>
                        Bio:
                    </Text>
                    <TextInput
                    maxLength={280}
                    multiline 
                    style={styles.ti}
                    />

                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Profile'), 
                        console.log('Presionaste el boton de Save')
                        
                    }}
                    style={styles.button}>
                        <Text style={styles.textbutton}>
                        Guardar Cambios
                        </Text>
                    </TouchableOpacity>

                </View>

            
            </ScrollView>
            
        </View>
    )
}
export default Settings


const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
  
    },
    csettings: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 420
    
    },
    csettingsi: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 400

    },
    cdate: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 400

    },
    title: {
        flex: 1,
        fontSize: 50,
        marginBottom: 50,
        marginTop:30,
        justifyContent: 'flex-start',
        fontWeight: 'bold',
    
    },
    text: {
        fontSize: 15,
        color: "black",
        padding: 10,
    
    },
    ti: {
        borderWidth: 2,
        padding: 10,
        borderColor: "black",
        width: 250,
        marginBottom: 10,

    },
    tidate: {
        borderWidth: 2,
        padding: 10,
        borderColor: "black",
        width: 60,
        marginBottom: 10,

    },
    button: {
        backgroundColor: "lightgray",
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
        
      },

})