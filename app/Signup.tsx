import React from 'react'
import { StyleSheet, TextInput, Pressable, Image } from 'react-native'
import { View, Text } from '../components/Themed'
import { registerUser } from '../api/api-utils'
import { Ionicons } from '@expo/vector-icons';


export default function Signup(props: any) {

  const {userData, setUserData} = props.route.params
  const [state, setState] = React.useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const updateState = (key: string, value: string) => {
    setState({
      ...state,
      [key]: value
    })
  }

  const signup = () => {
    if (state.password !== state.confirmPassword) {
      // TODO: Change this to a tooltip
      alert("Passwords don't match")
      return
    }
    registerUser(state.email, state.password).then(user => {
      console.log(user)
      if (user !== undefined) {
        setUserData(user)
        props.navigation.navigate('GoalSetter')
      }
      setState({
        email: '',
        password: '',
        confirmPassword: ''
      })
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons 
          name="arrow-back-outline" 
          size={30} 
          color="#1bec0d" 
          onPress={() => props.navigation.navigate('Login')}
        />
      </View>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <View style={[styles.textInputContainer, styles.textInputContainerEmail]}>
          <TextInput 
            placeholder="Email" 
            value={state.email} 
            style={styles.textInput} 
            onChangeText={text => updateState('email', text)} 
          />
        </View>
        
        <View style={[styles.textInputContainer, styles.textInputContainerEmail]}>
          <TextInput 
            placeholder="Password" 
            value={state.password} 
            secureTextEntry={true}
            style={styles.textInput} 
            onChangeText={text => updateState('password', text)}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput 
            placeholder="Confirm Password" 
            value={state.confirmPassword} 
            secureTextEntry={true}
            style={styles.textInput} 
            onChangeText={text => updateState('confirmPassword', text)}
          />
        </View>
        
        <View style={{flexDirection: 'row', width: '80%', justifyContent: 'center'}}>
          <Pressable onPress={() => signup()} style={styles.loginPressable}>
              <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
        </View>
        

        <View style={{flexDirection: 'row', justifyContent:'space-around', width: '80%'}}>
          {/* <View style={{borderBottomColor: '#474747', borderBottomWidth: 2, flex: 1, marginRight: 10, opacity: 0.5}}></View> */}
          <Text style={{fontSize: 16}}>- Or sign up with -</Text>
          {/* <View style={{borderBottomColor: '#474747', borderBottomWidth: 2, flex: 1, marginLeft: 10, opacity: 0.5}}></View> */}
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

        {/* <View style={{flexDirection: 'row'}}> 
          <Text>Already have an account?</Text>
          <Pressable onPress={() => props.navigation.navigate('Signup')}> 
            <Text style={{color: '#1bec0d'}}> Sign in</Text>
          </Pressable>
        </View> */}
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
        marginBottom: '-5%'        
    },
    logo: {
        // fontSize: 20,
        marginTop: '10%',
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
        fontSize: 20,
    },
    socialMediaIcon: {
      backgroundColor: 'white',
      width: 85,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
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
    },
    header: {
      // position: 'absolute',
      top: '5%',
      width: "80%",
    }
})