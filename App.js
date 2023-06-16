// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [playerNumber, setPlayerNumber] = useState(null)

  const startGameHandler = (selectedNumber) => {
    setPlayerNumber(selectedNumber)


  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}> 
      <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          { playerNumber 
            ? <GameScreen playerNumber={playerNumber} setPlayerNumber={setPlayerNumber}/> 
            : <StartGameScreen startGameHandler={ startGameHandler }/> }
        </SafeAreaView>
        
      </ImageBackground>  
    </LinearGradient>  
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
