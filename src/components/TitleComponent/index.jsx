import React from 'react'
import { styles } from './style'
import { Text } from 'react-native'

export const Title = (props) => {

    return <Text style={styles.container}>{props.title}</Text>
}