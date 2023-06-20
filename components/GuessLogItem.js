import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const GuessLogItem = ({numberOfAttempts, guessNumber}) => {
    return (
    <View style={styles.logItem}>
      <Text>#{ numberOfAttempts }</Text>
      <Text>Opponent's guess : { guessNumber }</Text>
    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
    logItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: Colors.yellow500,
        borderColor: Colors.primary750,
        borderWidth: 2,
        borderRadius: 24,
        marginBottom: 4,
        fontSize: 12,
        fontWeight: '800',
        padding: 12,
    },
})