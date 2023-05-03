import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonComponents } from '../ButtonComponents'

// 0º Inicio tudo
// 1º Montagem
// 2º Atualização
// 3º desmontagem
export const CounterComponent = () => {
    const [ contador, setContador ] = useState(0)
    const [ disabled, setDisabled ] = useState(false)

    //É chamado depois que o componente foi montado
    useEffect(()=>{
        console.log('componentDidMount')
        console.log()
    },[])

    //É chamado quando o componente é atualizado
    useEffect(()=> {
        console.log('componentDidUpdate')
        console.log()
        if(contador > 0){
            setDisabled(false)
        }
        
        if(contador === 0 ) {
            setDisabled(true)
        }
    },[contador])


    //Isso é chamado imediatamente antes de o componente ser removido
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