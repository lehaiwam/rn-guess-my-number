import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'

const StartGameScreen = () => {
    const [inputNumber, setInputNumber] = useState('')

    const confirmHandler = () => {
      console.log('Processing input...', inputNumber )
      const playerNumber = parseInt(inputNumber)
      
      if (playerNumber < 1 || playerNumber > 99 || !Number.isInteger(playerNumber)) {
        console.log('Player entered an INVALID number!!!')
        Alert.alert(
          'Invalid Number Entered!!!', 
          'The number MUST be from 1 to 99',
          [{text: 'cancel', style: 'cancel'}]
        )
        resetInput()
        return
      }
      resetInput()
      console.log('Player entered a valid number: ', playerNumber )

    }

    const resetInput = () => {
      console.log('Resetting input...')
      setInputNumber('')
    }

    return (
      <View style={styles.inputContainer}>  
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
    backgroundColor: '#440424',
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
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
})

export default StartGameScreen