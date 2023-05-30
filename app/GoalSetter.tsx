import React from 'react'
import { View, Text } from '../components/Themed'
import { StyleSheet, Pressable } from 'react-native'
import { TextInput } from 'react-native-gesture-handler' 

export default function GoalSetter(props: any) {

    const [amount, setAmount] = React.useState("")

    const handleChange = (value: any) => {
        if (value.length === 1 && value !== '$') {
            setAmount(`$${value}`)
        } else {
            setAmount(value)
        }
    }

  return (
    <View style={styles.container}>
        <View style={{ width: '80%', justifyContent: 'space-around', alignItems: "center", height: '35%', marginTop: '-20%'}}>
            <Text style={styles.textLabel}>How much money per month are you aiming to earn with CashFlow?</Text>
            <View style={styles.textInputContainer}>
                <TextInput 
                    style={styles.textInput}
                    placeholder='$50' 
                    keyboardType={'number-pad'}
                    value={amount} 
                    defaultValue='50' 
                    onChangeText={handleChange} 
                />
            </View>

            <View style={{flexDirection: 'row', width: '50%', justifyContent: 'center'}}>
            <Pressable onPress={() => props.navigation.navigate('Home')} style={styles.loginPressable}>
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#fff',
    },
    loginPressable: {
        paddingHorizontal: 20,
        width: "100%",
        height: 50,
        paddingVertical: 10,
        backgroundColor: "#1bec0d",
        opacity: 0.85,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 1, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    textInput: {
        paddingBottom: 15,
        paddingLeft: 10,
        opacity: 0.75,
        width: "100%",
        color: '#2d2d2d',
        fontSize: 16,
        marginBottom: '-10%',
        paddingRight: '7%',
        textAlign: 'center'
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '50%',
        height: 50,
        shadowOffset: { width: 1, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 2,
        borderRadius: 10,
    },
    textLabel: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2d2d2d',
        paddingBottom: '5%'
    }
})