import React from 'react'
import { View } from 'react-native'

import { ButtonComponents } from '../../components/ButtonComponents'
import { useLifeCicleScreen } from './useLifeCicleScreen'

export const LifeCicleScreen = () => {

    const { handleCounter, handleShowCounter, label } = useLifeCicleScreen()
    
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            
            { handleCounter() }
            
            <ButtonComponents 
                description={label} 
                onPress={handleShowCounter} 
            />
        </View>
    )
}