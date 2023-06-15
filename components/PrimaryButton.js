import { Text, View, StyleSheet, Pressable } from 'react-native'

const PrimaryButton = ({children, targetFunction}) => {
    return (
        <View style={styles.buttonOuter}>
            <Pressable style={styles.buttonInner} onPress={ targetFunction } android_ripple={{color: '#e9de0d'}} >
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
        backgroundColor: '#9d2f6b',
        paddingVertical: 8,
        elevation: 8,
    },  
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        textTransform: 'capitalize'
    }


}) 

export default PrimaryButton