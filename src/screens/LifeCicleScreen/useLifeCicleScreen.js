import React, { useEffect, useState } from 'react'
import { CounterComponent } from '../../components/CounterComponent'

export const useLifeCicleScreen = () => {

    const [ showConter, setShouwCounter ] = useState(false)
    const [ label, setLabel ] = useState('')

    useEffect(()=>{
        
        const label = showConter ? 'Esconder Componente' : 'Mostrar Componente'

        setLabel(label)
    },[showConter])

    const handleCounter = () => showConter === true && <CounterComponent /> 
    
    const handleShowCounter = () => setShouwCounter(!showConter)

    return {
        label: label,
        handleCounter: handleCounter,
        handleShowCounter: handleShowCounter
    }
}