import React from 'react'
import { StyleSheet, TextInput, Pressable } from 'react-native'
import { View, Text } from '../components/Themed'
import { SafeAreaView } from 'react-native-safe-area-context';
import AccountIcon from '../components/AccountIcon'

export default function Home(props: any) {

  const handleIconClick = () => {
    props.navigation.navigate('Account')
  }

  return (
    <SafeAreaView style={styles.container}>
      <AccountIcon handleIconClick={handleIconClick} />
        <Text>Home</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
})