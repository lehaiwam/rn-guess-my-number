import { StyleSheet, Image , View, Text, Dimensions, useWindowDimensions } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import React from 'react'
import Title from '../components/Title'
import Colors from '../constants/Colors'

const deviceWidth = Math.trunc( Dimensions.get("window").width )
const imgContainerW = Math.trunc(deviceWidth * 0.8)

const GameOverScreen = ({
    setPlayerNumber, 
    setGameOver, 
    numberOfRounds, 
    numberToGuess }) => {

    const restartGame = () => {
        setPlayerNumber(null)
        setGameOver(false)
    }

    return (     
        <View style={styles.mainContainer}>
            <Title description={"Game Over!!!"} />
            <View style={styles.imageContainer} > 
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text  style={styles.resultInfo}>
                The opponent needed <Text style={styles.highlight}>{numberOfRounds}</Text> rounds
                to guess the number <Text style={styles.highlight}>{numberToGuess}</Text>! 
            </Text>

            <View style={styles.buttonContainer}>
                <PrimaryButton targetFunction={ restartGame } >
                    Restart Game
                </PrimaryButton> 
            </View> 


        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    imageContainer: {
        width: imgContainerW,
        height: imgContainerW,
        marginTop: 16,
    },
    image: {
        width: imgContainerW,
        height: imgContainerW,
        borderRadius: imgContainerW/2,
        borderWidth: 2,
        borderColor: Colors.primary500,
    },
    resultInfo: {
        paddingHorizontal: 20,
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        marginVertical: 20,
        textAlign: 'center',
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: Colors.primary750,
    },
    buttonContainer: {
        width: '80%',
        height: 100,
        padding: 12,
        alignItems: 'center',
        
    },
})


export default GameOverScreen