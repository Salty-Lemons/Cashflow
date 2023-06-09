import React from 'react'
import { View } from '../components/Themed'
import { SafeAreaView, StyleSheet } from 'react-native'
import WelcomeMessage from '../components/WelcomeMessage'
import Navbar from '../components/Navbar'

export default function SurveysTab(props: any) {

    const {userDocument} = props.route.params
  return (
    <View style={styles.surveyTab}>
        <WelcomeMessage userDocument={userDocument} isHomepage={false}/>
        <View style={styles.container}>
            <Navbar navigation={props.navigation} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    surveyTab: {
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
})
