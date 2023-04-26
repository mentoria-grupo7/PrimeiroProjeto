import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style'

export const LoginComponents = ({ onChangeEmail, onChangeSenha }) => {
    
    return (
        <View>
            <TextInput 
                style={styles.input} 
                placeholder="Email"
                onChangeText={(valor)=>{
                    onChangeEmail(valor)
                }}
                />
            <TextInput 
                style={styles.input} 
                placeholder="Senha"
                onChangeText={onChangeSenha}
            />
            <TouchableOpacity
                style={styles.botao} 
                onPress={()=>console.log('clickou aqui')}>
                    
                <Text style={styles.textoBotao}>login</Text>
            </TouchableOpacity>
        </View>
    )
}