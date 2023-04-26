import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonComponents } from '../ButtonComponents'

export const CounterComponent = () => {
    const [ contador, setContador ] = useState(0)
    const [ disabled, setDisabled ] = useState(false)

    //É executado depois que o componente foi montado
    useEffect(()=>{
        console.log('componentDidMount')
        console.log()
    },[])

    //É executado quando o componente é executado
    useEffect(()=>{
        console.log('componentDidUpdate')
        console.log()
        if(contador > 0){
            setDisabled(false)
        }
        
        if(contador === 0 ) {
            setDisabled(true)
        }
    },[contador])


    //Isso é executado imediatamente antes de o componente ser removido
    useEffect(()=>{
        return () => {
            console.log('componentWillUnmount')
            console.log()
        }
    },[])

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>{contador}</Text>
            <View
             style={{
                flexDirection: 'row',
             }} >
                <ButtonComponents
                    description={'Adicionar'} 
                    onPress={()=> setContador(contador + 1)}
                    />

                <ButtonComponents 
                    disabled={disabled} 
                    description={'Remover'} 
                    onPress={()=> setContador(contador - 1)}
                    />
            </View>

        </View>
    )
}