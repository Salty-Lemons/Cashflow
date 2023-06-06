import React, {useEffect} from 'react'
import { View } from '../components/Themed'
import { Text, StyleSheet, Pressable } from 'react-native'
import { logoutUser } from '../api/api-utils'
import Navbar from '../components/Navbar';

export default function Account(props: any) {

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
        {/* <Navbar handleIconClick={handleIconClick} selected={selected} setSelected={setSelected} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      alignItems: 'center',
      justifyContent:'center'
    },
  })