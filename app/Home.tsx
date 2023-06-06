import React, { useEffect } from 'react'
import { StyleSheet, TextInput, Pressable, Image } from 'react-native'
import { View, Text } from '../components/Themed'
import AccountIcon from '../components/AccountIcon'
import { ScrollView } from 'react-native-gesture-handler';
import { getUserDocument } from '../api/api-utils';
import Navbar from '../components/Navbar';
import WelcomeMessage from '../components/WelcomeMessage';

export default function Home(props: any) {

  const [userData, setUserData] = React.useState({})

  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()

  const daysInMonth = 32 - new Date(year, month, 32).getDate()
  useEffect(() => {
    getUserDocument().then((data: any) => {
      setUserData(data)
    })


  }, [])

  const handleIconClick = () => {
    props.navigation.navigate('Account')
  }

  return (
    <View style={styles.homepage}>
      <WelcomeMessage userData={userData} />
      <View style={styles.container}>
        
        {/* <ScrollView style={{width: '100%', height: '80%'}}> */}
          <View>
            <Text style={styles.dailyTargetText}>{((userData.targetDaily * 4) / daysInMonth).toFixed(0) - userData.completedToday} more surveys to reach daily target!</Text>
          </View>
        {/* </ScrollView> */}
        <Navbar handleIconClick={handleIconClick} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent:'center',
    height: '100%',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    width: '100%',
    marginTop: '2%',
    backgroundColor:'#fff',
    alignItems: 'flex-start',
    justifyContent:'flex-start',
  },
  dailyTargetText: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    paddingHorizontal: '7%',
    color: '#2a2c33',
  },
})