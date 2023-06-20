import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const Card = () => {
  return (
    <View style={styles.card}></View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.primary750,
        padding: 16,
        marginTop: 64,
        marginHorizontal: 24,
        borderRadius: 12,
        elevation: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Card