import React from 'react'
import { Text, View } from 'react-native'
import { ButtonComponents } from '../../components/ButtonComponents'
import { useNavigation } from '@react-navigation/native'

export const SettingsScreen = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text>Settings Screen</Text>
            <ButtonComponents
                description={'Voltar'} 
                onPress={()=> navigation.pop() } 
            />
        </View>
    )
}