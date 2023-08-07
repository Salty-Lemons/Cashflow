import React from 'react'
import { View } from '../components/Themed'
import { SafeAreaView, StyleSheet, Pressable, Text, Image } from 'react-native'
import WelcomeMessage from '../components/WelcomeMessage'
import Navbar from '../components/Navbar'
import { ScrollView } from 'react-native-gesture-handler'
import TargetDaily from '../components/TargetDaily'
import TestSurvey from '../components/TestSurvey'

export default function RedeemTab(props: any) {

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
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        flex: 1,
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: '7%'
                    }}>
                        <Text style={{fontSize: 20}}>Redeem Cashflow Points</Text>
                        <Text style={{fontSize: 14, paddingBottom: 20, paddingTop: 15}}>Earn more Cashflow points by completing surveys</Text>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../assets/images/amazonGC.png')} style={{flex:1}} />

                            <Image source={require('../assets/images/paypal.png')} style={styles.image} />

                            <Image source={require('../assets/images/visa.jpg')} style={styles.image} />
                        </View>
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
        alignItems: 'center',
        justifyContent:'center',
      },
    image: {
        flex: 1,
        marginTop: 20,
        shadowOffset: { width: 1, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        elevation: 1,
    }
})
