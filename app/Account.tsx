import React from 'react'
import { View } from '../components/Themed'
import { Text, StyleSheet, Pressable } from 'react-native'
import { logoutUser } from '../api/api-utils'

export default function Account(props) {

    const handleSignOut = () => {
        logoutUser();
        props.navigation.navigate('Login')
    }

  return (
    <View style={styles.container}>
        <Text>Account</Text>
        <Pressable onPress={handleSignOut} >
            <Text>Sign Out</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center'
    },
  })