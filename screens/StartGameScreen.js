import { StyleSheet, View, TextInput } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/Colors'
import WarningModal from '../components/WarningModal'

const StartGameScreen = ({startGameHandler}) => {
    const [inputNumber, setInputNumber] = useState('')
    const [showModal, setShowModal] = useState(false)

    const confirmHandler = () => {
      console.log('Processing input...', inputNumber )
      const playerNumber = parseInt(inputNumber)
      
      if (playerNumber < 1 || playerNumber > 99 || !Number.isInteger(playerNumber)) {
        console.log('Player entered an INVALID number!!!')
        setShowModal(true)
        return
      }

      console.log('Player entered a valid number: ', playerNumber )
      startGameHandler(playerNumber)

    }

    const resetInput = () => {
      console.log('Resetting input...')
      setInputNumber('')
    }

    return (
      <View style={styles.inputContainer}> 
        <WarningModal 
          showModal={showModal} 
          setShowModal={setShowModal}
          resetInput={resetInput}
        />
        <TextInput
          onChangeText={ (inpTxt) => { setInputNumber(inpTxt)}}
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          value={inputNumber}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton targetFunction={ resetInput }>reset</PrimaryButton>
          <PrimaryButton targetFunction={ confirmHandler }>confirm</PrimaryButton>
        </View>

      </View>
    )
}

const styles = StyleSheet.create({
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
  },

})

export default StartGameScreen