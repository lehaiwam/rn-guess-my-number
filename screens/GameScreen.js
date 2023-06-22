import { StyleSheet, View, Text, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../constants/Colors'
import PrimaryButton from '../components/PrimaryButton'
import GuessLogItem from '../components/GuessLogItem'
import Title from '../components/Title'
import {Ionicons} from '@expo/vector-icons'

const  MIN = 1 
const  MAX = 100
let minBoundary = MIN
let maxBoundary = MAX
let numberOfAttempts = 0


const genRandomNumber = ( min, max, exclude ) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min
  if (randomNumber === exclude) {
    return genRandomNumber( min, max, exclude )
  } else {
    return randomNumber
  }
}

const GameScreen = ({
  playerNumber, 
  setPlayerNumber, 
  setNumberToGuess, 
  setNumberOfRounds, 
  setGameOver,
  guessArrayValues,
  setGuessArrayValues}) => 
{

  const [ direction, setDirection ] = useState(null)

  const initialGuess = genRandomNumber( MIN, MAX, playerNumber )
  const [ guessNumber, setGuessNumber ] = useState(initialGuess)

  useEffect(()=>{
    if (guessNumber === playerNumber) {
      console.log('\n   GAME OVER!!! Number: ', guessNumber, 'guessed correctly after', numberOfAttempts, ' attempts.')
      setNumberOfRounds(numberOfAttempts)
      setNumberToGuess(guessNumber)
      // Reset values for the next game
      setGameOver(true)
      setPlayerNumber(null)
      setGuessArrayValues([])
      minBoundary = MIN
      maxBoundary = MAX
      numberOfAttempts = 0
    } 
  }, [guessNumber])
  

  const nextGuessHandler = (direction) => {

    if (!numberOfAttempts) {
      numberOfAttempts=1
      setGuessArrayValues( (currArray) => {
        return ([ [numberOfAttempts, initialGuess], ...currArray ])
      })
    } else {
      numberOfAttempts++
      setGuessArrayValues( (currArray) => {
        return ([ [numberOfAttempts, guessNumber],  ...currArray ])
      })
    }

    if ((direction === 'lower' && guessNumber < playerNumber) || 
        (direction === 'higher' && guessNumber > playerNumber)) {
          Alert.alert(
            'WARNING!', 
            'Invalid direction selected...Please make another selection', 
            [{text: 'Okay', style:'cancel'}]
          )
          return
    }

    if (direction === 'lower') {
      maxBoundary = guessNumber
    } else {
      minBoundary = guessNumber
    }
    setGuessNumber( genRandomNumber( minBoundary, maxBoundary, guessNumber ) )
    setDirection(null)
  }

  const onCancelGame = () => {
    setPlayerNumber(null)
    setGuessArrayValues([])
    setGameOver(false)
    numberOfAttempts = 0
  }

  return (
    <View style={ styles.container }>
      <Title description={"Opponent's Guess"} /> 
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{guessNumber}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <Text style={styles.actionsText}>going, lower or higher?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton 
            targetFunction={ nextGuessHandler }
            direction='lower'
          >
            <Ionicons name="remove-circle-outline" size={28} color="white"/>
          </PrimaryButton>

          <PrimaryButton 
            targetFunction={ nextGuessHandler }
            direction='higher'
          >
            <Ionicons name="add-circle-outline" size={28} color="white"/>
          </PrimaryButton>
        </View>
      </View>

      <View style={styles.flatListContainer} >
        <FlatList style={styles.flatList}
          data={guessArrayValues}
          renderItem={ ({item}) => <GuessLogItem numberOfAttempts={item[0]}  guessNumber={item[1]}/> }
          keyExtractor={ item => item[0]}
        />
      </View>

      {/*
      <View>
        {
            guessArrayValues.map( (item) => {
              return(
                <GuessLogItem 
                  key={item[0]}
                  numberOfAttempts={ item[0]} 
                  guessNumber={ item[1] } />
              )
            })
        }
      </View>
      */}

      <View style={styles.cancelButtonContainer}>
        <PrimaryButton targetFunction={ onCancelGame } >
          Restart Game
        </PrimaryButton> 
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 48,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  numberContainer: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colors.yellow500,
    padding: 24,
    marginVertical: 12,
    width: '50%',
    alignItems: 'center'
  },
  numberText: {
    fontSize: 36,
    color: Colors.yellow500,
    fontWeight: 'bold',
  },
  actionsContainer: {
    backgroundColor: Colors.primary750,
    marginHorizontal: 24,
    borderRadius: 12,
    elevation: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 12,
    paddingVertical: 20,
    marginBottom: 12,
  },
  actionsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.yellow500,
    textTransform: 'capitalize',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  flatListContainer: {
    width: '100%',
    flex: 1,
    padding: 8,
  },
  flatList: {
    width: '100%',
  },
  cancelButtonContainer: {
      width: '80%',
      height: 100,
      padding: 12,
      alignItems: 'center',
  },
})


export default GameScreen