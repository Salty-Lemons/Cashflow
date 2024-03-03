import React from 'react'
import { View } from '../components/Themed'
import { SafeAreaView, StyleSheet, Pressable, Text } from 'react-native'
import WelcomeMessage from '../components/WelcomeMessage'
import Navbar from '../components/Navbar'
import TestSurvey from '../components/TestSurvey'
import { ScrollView } from 'react-native-gesture-handler'
import TargetDaily from '../components/TargetDaily'

export default function SurveysTab(props: any) {

    const {userDocument} = props.route.params
  return (
    <View style={styles.surveyTab}>
        <WelcomeMessage userDocument={userDocument} isHomepage={false}/>
        <View style={styles.container}>
            <Navbar navigation={props.navigation} />
            <ScrollView style={{
                width: '100%',
                marginBottom: 100
            }}>
                <View style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TargetDaily userDocument={userDocument} />
                    <View style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                    }}>
                        <TestSurvey />
                        <TestSurvey />
                        <TestSurvey />
                        <TestSurvey />
                    </View>
                </View>
                

            </ScrollView>
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
