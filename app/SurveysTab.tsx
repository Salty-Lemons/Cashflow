import React from 'react'
import { View } from '../components/Themed'
import { SafeAreaView, StyleSheet, Pressable, Text } from 'react-native'
import WelcomeMessage from '../components/WelcomeMessage'
import Navbar from '../components/Navbar'
import TestSurvey from '../components/TestSurvey'
import { ScrollView } from 'react-native-gesture-handler'
import TargetDaily from '../components/TargetDaily'
import RNPollfish from 'react-native-plugin-pollfish';
import { updateUserDocument } from '../api/api-utils'

export default function SurveysTab(props: any) {

    const {userDocument} = props.route.params

    var builder = new RNPollfish.Builder('de9e8cce-4afc-4190-8e3b-fe27b437ad2e', '3ff4f637-9651-47b1-bada-e4c08763f1ff')
        .rewardMode(true);
    

    RNPollfish.addEventListener(RNPollfish.PollfishSurveyNotAvailableListener, () => {
        console.log("Pollfish Survey Not Available");
    });

    RNPollfish.addEventListener(RNPollfish.PollfishSurveyCompletedListener, (event: any) => {
        updateUserDocument({
            completedToday: userDocument.completedToday + 1,
            completedTotal: userDocument.completedTotal + 1,
            points: userDocument.points + parseInt(event.surveyCPA),
        })
        console.log(typeof(event.rewardValue))
        console.log(`Pollfish Survey Completed - CPA: ${event.surveyCPA}, IR: ${event.surveyIR}, LOI: ${event.surveyLOI}, Class: ${event.surveyClass}, Reward Value: ${event.rewardValue}, Reward Name: ${event.rewardName}, Remaining Completes: ${event.remainingCompletes}`);
    });

    const searchForSurvey = () => {
        RNPollfish.init(builder.build());

        builder.indicatorPosition(RNPollfish.Position.middleLeft)
            .indicatorPadding(10)
            .offerwallMode(false)
            .rewardMode(true)
            .releaseMode(false)
            .requestUUID('REQUEST_UUID')
            .userProperties({
                gender: '1',
                education: '1',
            })
            .clickId('CLICK_ID')
            .userId(userDocument.uid)
            .signature('SINGNATURE')
            .rewardInfo({
                rewardName: 'Points',
                rewardConversion: 1.0
            });
        
        RNPollfish.addEventListener(RNPollfish.PollfishSurveyReceivedListener, (event: any) => {
            if (event === undefined) {
                console.log("Pollfish Offerwall Received");
            } else {
                RNPollfish.show();
                console.log(`Pollfish Survey Received - CPA: ${event.surveyCPA}, IR: ${event.surveyIR}, LOI: ${event.surveyLOI}, Class: ${event.surveyClass}, Reward Value: ${event.rewardValue}, Reward Name: ${event.rewardName}, Remaining Completes: ${event.remainingCompletes}`);
            }
        });
    }


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
                        <Pressable onPress={() => searchForSurvey()}>
                            <Text style={{
                                color: '#2a2c33',
                                fontSize: 20,
                                fontWeight: 'bold',
                                padding: 10,
                                borderRadius: 10,
                                backgroundColor: '#1bec0d',
                                alignItems: 'center',
                                justifyContent: 'center',
                                shadowOffset: { width: 1, height: 3 },
                                shadowColor: 'black',
                                shadowOpacity: 0.6,
                                elevation: 2,
                            }}>Search for Survey</Text>
                        </Pressable>
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
})
