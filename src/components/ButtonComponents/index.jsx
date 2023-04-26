import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

//StateLess Components
export const ButtonComponents = ({ description, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.botao} 
            onPress={onPress}>
            <Text style={styles.textoBotao}>{description}</Text>
        </TouchableOpacity>
    )
}