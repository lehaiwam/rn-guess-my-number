import { StyleSheet, View, Text, TextInput } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'
import { useState } from 'react'
import Colors from '../constants/Colors'
import WarningModal from '../components/WarningModal'

const StartGameScreen = ({startGameHandler}) => {
    const [inputNumber, setInputNumber] = useState('')
    const [showModal, setShowModal] = useState(false)

    const confirmHandler = () => {
      const playerNumber = parseInt(inputNumber)
      
      if (playerNumber < 1 || playerNumber > 99 || !Number.isInteger(playerNumber)) {
        setShowModal(true)
        return
      }
      console.log('\n   Let the game begin, Number to guess: ', playerNumber )
      startGameHandler(playerNumber)
    } /* end of confirmHandler() */

    const resetInput = () => {
      setInputNumber('')
    } /* end of resetInput() */

    return (
      <View style={styles.rootContainer}>
        <Title description='guess my number'/> 
        <View style={styles.inputContainer}> 
          <WarningModal 
            showModal={showModal} 
            setShowModal={setShowModal}
            resetInput={resetInput}
          /> 
          <Text style={styles.inputContainerHeader}>enter a number</Text>
          <TextInput
            onChangeText={ (inpTxt) => { setInputNumber(inpTxt)}}
            style={styles.numberInput}
            maxLength={2}
            keyboardType='number-pad'
            value={inputNumber}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton 
              targetFunction={ resetInput }>reset</PrimaryButton>
            <PrimaryButton targetFunction={ confirmHandler }>confirm</PrimaryButton>
          </View>
        </View>

      </View>
    )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 100,
  },
  inputContainer: {
    backgroundColor: Colors.primary750,
    padding: 16,
    marginTop: 64,
    marginHorizontal: 24,
    borderRadius: 12,
    elevation: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainerHeader: {
    color: Colors.yellow500,
    fontSize: 24,
    textTransform: 'capitalize',
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellow500,
    borderBottomWidth: 2,
    color: Colors.yellow500,
    marginVertical: 8,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 12,
  },
})

export default StartGameScreen