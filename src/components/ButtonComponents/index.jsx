import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

//StateLess Components
export const ButtonComponents = ({ description, onPress, disabled }) => {
    
    const addOpacity = disabled ? { opacity: 0.5} : {opacity: 1}

    return (
        <TouchableOpacity
            style={[styles.botao, addOpacity]} 
            disabled={disabled}
            onPress={onPress}>
            <Text style={styles.textoBotao}>{description}</Text>
        </TouchableOpacity>
    )
}