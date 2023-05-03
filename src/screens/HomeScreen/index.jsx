import React from 'react'
import { Text, View } from 'react-native'
import { ButtonComponents } from '../../components/ButtonComponents'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text>Tela da home</Text>
            <ButtonComponents 
                description={'Navegar'} 
                onPress={()=> navigation.push('Settings') } 
            />
        </View>
    )
}