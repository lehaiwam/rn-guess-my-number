import { StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/Title'
import Colors from '../constants/Colors'
const MIN = 1 
const MAX = 100

const genRandomNumber = ( MIN, MAX, exclude ) => {
  const randomNumber = Math.floor(Math.random() * (MAX - MIN)) + MIN
  if (randomNumber === exclude) {
    return genRandomNumber( MIN, MAX, exclude )
  } else {
    return randomNumber
  }
}

const GameScreen = ({playerNumber, setPlayerNumber}) => {
  console.log(playerNumber, setPlayerNumber )

  const initialGuess = genRandomNumber( MIN, MAX, playerNumber )
  console.log('Initial guess: ', initialGuess )
  const [guessNumber, setGuessNumber] = useState(initialGuess)

  return (
    <View style={ styles.container }>
      <Title description={"Opponent's Guess"} /> 
      <Button title='Back' onPress={ () => {setPlayerNumber(null)} } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 48,
    marginBottom: 20,
    marginHorizontal: 20,
  },
})


export default GameScreen