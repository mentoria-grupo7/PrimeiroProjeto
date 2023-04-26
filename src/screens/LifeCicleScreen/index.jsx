import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { CounterComponent } from '../../components/CounterComponent'
import { ButtonComponents } from '../../components/ButtonComponents'

export const LifeCicleScreen = () => {
    const [ showConter, setShouwCounter ] = useState(false)
    const [ label, setLabel ] = useState('')

    useEffect(()=>{
        const label = showConter ? 'Esconder Componente' : 'Mostrar Componente'
        setLabel(label)
    },[showConter])

    const handleCounter = () => {
        if(showConter){
            return <CounterComponent />
        }
    }
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            
            { handleCounter() }
            
            <ButtonComponents 
                description={label} 
                onPress={()=> setShouwCounter(!showConter)} 
            />
        </View>
    )
}