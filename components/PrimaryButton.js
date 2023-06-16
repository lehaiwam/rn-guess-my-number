import { Text, View, StyleSheet, Pressable } from 'react-native'
import Colors from '../constants/Colors'

const PrimaryButton = ({children, targetFunction}) => {
    return (
        <View style={styles.buttonOuter}>
            <Pressable style={styles.buttonInner} onPress={ targetFunction } android_ripple={{ color: Colors.yellow500 }} >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>    
        </View>  
    )
}

const styles = StyleSheet.create({
    buttonOuter: {
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
        color: Colors.white1000,
        textAlign: 'center',
        textTransform: 'capitalize'
    }


}) 

export default PrimaryButton