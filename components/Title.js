import { StyleSheet, Text, Platform } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const Title = ({description}) => {
  return (
    <Text style={ styles.title }>{description}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: Colors.white1000,
    borderColor: Platform.OS === 'android' ? Colors.yellow500: Colors.white1000, 
    borderWidth: Platform.select({ios: 0, android: 2}),
    padding: 12,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginVertical: 12,
  }
})

export default Title