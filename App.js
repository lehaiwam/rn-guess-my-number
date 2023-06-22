// import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView, ImageComponent } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import {useFonts} from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [ playerNumber, setPlayerNumber ] = useState(null)
  const [ gameOver, setGameOver ] = useState(false)
  const [ numberToGuess, setNumberToGuess ] = useState(null)
  const [ numberOfRounds, setNumberOfRounds ] = useState(null)
  const [ guessArrayValues, setGuessArrayValues ] = useState([])

  const [fontsLoaded] = useFonts({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const startGameHandler = (selectedNumber) => {
    setPlayerNumber(selectedNumber)
    setNumberToGuess(selectedNumber) //  Store value for game over screen
    setGameOver(false)
  }

  let screen = <StartGameScreen startGameHandler={startGameHandler}/>

  if(gameOver) {
    screen = <GameOverScreen 
      numberToGuess={numberToGuess}
      numberOfRounds={numberOfRounds}
      setGuessArrayValues={setGuessArrayValues}
      setPlayerNumber={setPlayerNumber}
      setGameOver={setGameOver}/>
  }

  if (playerNumber) {
      screen = <GameScreen 
                  playerNumber={playerNumber} 
                  setPlayerNumber={setPlayerNumber}
                  setNumberToGuess={setNumberToGuess}
                  setNumberOfRounds={setNumberOfRounds}
                  setGameOver={setGameOver}
                  guessArrayValues={guessArrayValues}
                  setGuessArrayValues={setGuessArrayValues}
                /> 
  }

  return (
    <>
      <StatusBar style='light' /> 
      <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}> 
        <ImageBackground 
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
          
        </ImageBackground>  
      </LinearGradient>
    </>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage:{
    opacity: .25,
  }
});
