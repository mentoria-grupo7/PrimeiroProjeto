import React from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const LoginScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text>Tela de login</Text>
            <TextInput style={styles.input} placeholder="Email"/>
            <TextInput style={styles.input} placeholder="Senha"/>
            <TouchableOpacity style={styles.botao} onPress={()=>{
                console.log('clickou aqui')
            }}>
                <Text style={styles.textoBotao}>login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
{
    botao:{
        backgroundColor:'blue',
        paddingHorizontal:12,
        paddingVertical:12,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius:20,
    },
    textoBotao:{
        color:'white',
        //textAlign: 'center',//
    },
    input:{
        paddingHorizontal:16,
        paddingVertical:16,
        borderWidth:1,
        marginBottom:16,
    },
    container:{
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
    }
}
)