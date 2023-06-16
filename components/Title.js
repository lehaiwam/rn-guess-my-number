import { StyleSheet, Text } from 'react-native'
import React from 'react'

const Title = ({description}) => {
  return (
    <Text style={ styles.title }>{description}</Text>
  )
}

const styles = StyleSheet.create({
    
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ddb52f',
        borderColor: '#ddb52f',
        borderWidth: 2,
        padding: 12,
        textAlign: 'center',
        width: '100%',
    }

})

export default Title