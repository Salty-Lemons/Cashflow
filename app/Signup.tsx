import React, {useEffect} from 'react'
import { StyleSheet, TextInput, Pressable } from 'react-native'
import { View, Text } from '../components/Themed'
import { loginUser } from '../api/api-utils'
import { getUser } from '../api/api-utils'

export default function Signup(props: any) {
  const [state, setState] = React.useState({
    email: '',
    password: ''
  })

  const updateState = (key: string, value: string) => {
    console.log(key, value)
    setState({
      ...state,
      [key]: value
    })
  }

  return (
    <View style={styles.container}>
        <Text style={styles.loginText}>Signup</Text>
        <TextInput 
          placeholder="Email" 
          value={state.email} 
          style={styles.textInput} 
          onChangeText={text => updateState('email', text)} 
        />
        <TextInput 
          placeholder="Password" 
          // value={password} 
          style={styles.textInput} 
          onChangeText={text => updateState('password', text)}
        />
        <Pressable onPress={() => loginUser(state.email, state.password).then(props.navigation.navigate('Home'))} style={styles.loginPressable}>
            <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        
    </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        height: 40, 
        borderColor: 'gray',
        borderBottomWidth: 1,
        width: "80%",
        margin: 10,
        color: '#93f393',
        fontSize: 16
    },
    loginText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#93f393'
    },
    loginPressable: {
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#93f393',
        borderRadius: 7
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
    }
})