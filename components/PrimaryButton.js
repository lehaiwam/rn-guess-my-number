import { Text, View, StyleSheet, Pressable } from 'react-native'
import Colors from '../constants/Colors'

const PrimaryButton = ({children, targetFunction, direction}) => {

    const invokeTargetFunction = () => {
        direction ? targetFunction(direction) : targetFunction()
    }

    return (
        <View style={styles.buttonOuter}>
            <Pressable style={styles.buttonInner} onPress={ invokeTargetFunction } android_ripple={{ color: Colors.yellow500 }} >
                <Text style={[styles.buttonText]}>{children}</Text>
            </Pressable>    
        </View>  
    )
}

const styles = StyleSheet.create({
    buttonOuter: {
        borderColor: Colors.yellow500,
        borderWidth: 1,
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
        width: '45%',
    },
    buttonInner: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        elevation: 8,
    },  
    buttonText: {
        textAlign: 'center',
        textTransform: 'capitalize',
        color: Colors.white1000,
        fontSize: 14,
        fontWeight: 'bold',
    }
}) 

export default PrimaryButton