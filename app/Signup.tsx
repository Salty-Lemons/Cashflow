import React from 'react'
import { StyleSheet, TextInput, Pressable } from 'react-native'
import { View, Text } from '../components/Themed'
import { FontAwesome } from '@expo/vector-icons'
import { registerUser } from '../api/api-utils'


export default function Signup(props: any) {
  const [state, setState] = React.useState({
    email: '',
    password: ''
  })

  const updateState = (key: string, value: string) => {
    setState({
      ...state,
      [key]: value
    })
  }

  const signup = () => {
    registerUser(state.email, state.password).then(user => {
      console.log(user)
      if (user !== undefined) {
        props.navigation.navigate('Home')
      }
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
          value={state.password} 
          secureTextEntry={true}
          style={styles.textInput} 
          onChangeText={text => updateState('password', text)}
        />
        <Pressable onPress={() => signup()} style={styles.loginPressable}>
            <Text style={styles.buttonText}>Signup</Text>
        </Pressable>
        
        <View style={{flexDirection: 'row', justifyContent:'space-around', width: '80%'}}>
          <View style={{borderBottomColor: 'gray', borderBottomWidth: 2, flex: 1, marginRight: 10, opacity: 0.5}}></View>
          <Text style={{marginBottom: -8}}>Or log in with</Text>
          <View style={{borderBottomColor: 'gray', borderBottomWidth: 2, flex: 1, marginLeft: 10, opacity: 0.5}}></View>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-around', width: '60%'}}>
          <FontAwesome.Button name="google" backgroundColor="#4285F4" onPress={() => console.log()} >
            Google
          </FontAwesome.Button>
          <FontAwesome.Button name="facebook" backgroundColor="#4285F4" onPress={() => console.log()}>
            Facebook
          </FontAwesome.Button>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}> 
          <Text>Already have an account?</Text>
          <Pressable onPress={() => props.navigation.navigate('Login')}> 
            <Text style={{color: 'blue'}}> Login</Text>
          </Pressable>
        </View>
    </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    textInput: {
        height: 40, 
        borderColor: 'gray',
        borderBottomWidth: 1,
        width: "80%",
        margin: 10,
        color: '#2d2d2d',
        fontSize: 16
    },
    loginText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2d2d2d',
        marginTop: 85,
    },
    loginPressable: {
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#2d2d2d',
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    }
})