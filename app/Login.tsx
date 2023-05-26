import React from 'react'
import { StyleSheet, TextInput, Pressable } from 'react-native'
import { View, Text } from '../components/Themed'
import { loginUser, loginWithGoogle } from '../api/api-utils'
import { FontAwesome } from '@expo/vector-icons'

export default function Login(props: any) {
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

  const login = () => {
    loginUser(state.email, state.password).then(user => {
      console.log(user)
      if (user !== undefined) {
        props.navigation.navigate('Home')
      }
    })
  }

  return (
    <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
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
        <Pressable onPress={() => login()} style={styles.loginPressable}>
            <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <View style={{flexDirection: 'row', justifyContent:'space-around', width: '80%'}}>
          <View style={{borderBottomColor: '#474747', borderBottomWidth: 2, flex: 1, marginRight: 10, opacity: 0.5}}></View>
          <Text style={{marginBottom: -8}}>Or log in with</Text>
          <View style={{borderBottomColor: '#474747', borderBottomWidth: 2, flex: 1, marginLeft: 10, opacity: 0.5}}></View>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-around', width: '60%'}}>
          <FontAwesome.Button name="google" backgroundColor="#4285F4" onPress={() => loginWithGoogle()} >
            Google
          </FontAwesome.Button>
          <FontAwesome.Button name="facebook" backgroundColor="#4285F4" onPress={() => console.log()}>
            Facebook
          </FontAwesome.Button>
        </View>
        <View style={{flexDirection: 'row'}}> 
          <Text>Don't have an account?</Text>
          <Pressable onPress={() => props.navigation.navigate('Signup')}> 
            <Text style={{color: 'blue'}}> Register</Text>
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
        borderColor: '#474747',
        borderBottomWidth: 2,
        opacity: 0.75,
        width: "80%",
        color: '#2d2d2d',
        fontSize: 16
    },
    loginText: {
        fontSize: 20,
        marginTop: 85,
        fontWeight: 'bold',
        color: '#2d2d2d'
    },
    loginPressable: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#2d2d2d",
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    }
})