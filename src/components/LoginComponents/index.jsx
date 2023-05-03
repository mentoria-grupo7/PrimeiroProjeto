import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'

export const LoginComponents = ({ onChangeEmail, onChangeSenha }) => {
    
    const navigation = useNavigation()

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
                onPress={()=> navigation.push('Home') }>
                    
                <Text style={styles.textoBotao}>login</Text>
            </TouchableOpacity>
        </View>
    )
}