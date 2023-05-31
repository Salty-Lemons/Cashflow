import React from 'react'
import { StyleSheet, TextInput, Pressable, Image } from 'react-native'
import { View, Text } from '../components/Themed'
import { loginUser, loginWithGoogle } from '../api/api-utils'
import {
  useFonts,
  Krub_400Regular
} from "@expo-google-fonts/dev";

export default function Login(props: any) {
  const [loaded] = useFonts({
    Krub: require("../assets/fonts/Krub-Regular.ttf"),
  });

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
        setState({
          email: '',
          password: ''
        })
      }
    })
  }
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <View style={[styles.textInputContainer, styles.textInputContainerEmail]}>
          <TextInput 
            placeholder="Email" 
            value={state.email} 
            style={styles.textInput} 
            onChangeText={text => updateState('email', text)} 
          />
        </View>
        
        <View style={styles.textInputContainer}>
          <TextInput 
            placeholder="Password" 
            value={state.password} 
            secureTextEntry={true}
            style={styles.textInput} 
            onChangeText={text => updateState('password', text)}
          />
        </View>
        
        <View style={{flexDirection: 'row', width: '80%', justifyContent: 'center'}}>
          <Pressable onPress={() => login()} style={styles.loginPressable}>
              <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
        

        <View style={{flexDirection: 'row', justifyContent:'space-around', width: '80%'}}>
          <Text style={{fontSize: 16, fontFamily: "Krub"}}>- Or log in with -</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-around', width: '80%', marginBottom: '16%'}}>
          <View style={styles.socialMediaIcon}>
            <Image
              style={{width: 30, height: 30, borderRadius: 100, padding: 10}}
              source={require('../assets/images/icons8-google-48.png')}
            />
          </View>
          <View style={styles.socialMediaIcon}>
            <Image
              style={{width: 30, height: 30, borderRadius: 100, padding: 10}}
              source={require('../assets/images/icons8-facebook-48.png')}
            />
          </View>
          
          <View style={styles.socialMediaIcon}>
            <Image
              style={{width: 30, height: 30, borderRadius: 100, padding: 10}}
              source={require('../assets/images/icons8-twitter-48.png')}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row'}}> 
          <Text style={{fontSize: 16}}>Don't have an account?</Text>
          <Pressable onPress={() => props.navigation.navigate('Signup')}> 
            <Text style={{color: '#1bec0d', fontSize: 16}}> Sign up</Text>
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
        paddingBottom: 15,
        paddingLeft: 10,
        opacity: 0.75,
        width: "100%",
        color: '#2d2d2d',
        fontSize: 16,
        marginBottom: '-5%',   
        fontWeight: 'bold',
        fontFamily: "Krub",
    },
    logo: {
        marginTop: '16%',
        width: 300,
        height: 100
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
        marginTop: '-5%',
        shadowOffset: { width: 1, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: "600",
        fontSize: 20,
    },
    socialMediaIcon: {
      backgroundColor: 'white',
      width: 85,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      // boxShadow: '5px 5px red',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 3,
    },
    textInputContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '80%',
      height: 50,
      shadowOffset: { width: 1, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 2,
      borderRadius: 10,
    },
    textInputContainerEmail: {
      marginBottom: '-7%'
    }
})