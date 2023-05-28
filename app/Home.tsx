import React from 'react'
import { StyleSheet, TextInput, Pressable } from 'react-native'
import { View, Text } from '../components/Themed'
import { SafeAreaView } from 'react-native-safe-area-context';
import AccountIcon from '../components/AccountIcon'
import { ScrollView } from 'react-native-gesture-handler';
import TestSurvey from '../components/TestSurvey';

export default function Home(props: any) {

  const handleIconClick = () => {
    props.navigation.navigate('Account')
  }

  return (
    <SafeAreaView style={styles.homepage}>
      <AccountIcon handleIconClick={handleIconClick} />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff', marginTop: 30}}>Surveys</Text>
        </View>
        {/* <View style={styles.angleRight}>
        <View style={styles.angleLeft}></View> */}
        {/* </View> */}
        <ScrollView style={{width: '100%', height: '80%'}}>
          <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <TestSurvey/>
            <TestSurvey/>
            <TestSurvey/>
            <TestSurvey/>
            <TestSurvey/>
            <TestSurvey/>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent:'center',
    backgroundColor: '#2a2c33',
  },
  container: {
    width: '100%',
    height: '110%',
    alignItems: 'flex-start',
    justifyContent:'flex-start',
  },
  wrapper: {
    width: '100%',
    height: '18%',
    backgroundColor:'#2a2c33',
    paddingTop: 60,
    paddingLeft: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  angleRight: {
    width: 50,
    height: 50,
    backgroundColor: '#2a2c33',
    justifyContent: 'flex-end', 
    marginLeft: "auto",
    marginTop:-5,
  },
  angleLeft: {
    width: 80,
    height: 71.75,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    zIndex:3,
    borderRadius: 50,
    marginLeft: -29,
    marginBottom: -26.5,
  },
})