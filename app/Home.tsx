import React, { useEffect } from 'react'
import { StyleSheet, TextInput, Pressable, Image, Dimensions } from 'react-native'
import { View, Text } from '../components/Themed'
import { ScrollView } from 'react-native-gesture-handler';
import { getUserDocument } from '../api/api-utils';
import Navbar from '../components/Navbar';
import WelcomeMessage from '../components/WelcomeMessage';
import { LineChart } from 'react-native-chart-kit';

export default function Home(props: any) {

  const {userData, userDocument} = props.route.params
  const [completedToday, setCompletedToday] = React.useState(0)
  const [targetDaily, setTargetDaily] = React.useState(0)

  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()

  const daysInMonth = 32 - new Date(year, month, 32).getDate()
  useEffect(() => {
    setCompletedToday(userDocument.completedToday)
    setTargetDaily(userDocument.targetDaily)
  }, [])

  console.log("userDocument",userDocument)
  return (
    <View style={styles.homepage}>
      <WelcomeMessage userDocument={userDocument} isHomepage={true} />
      <View style={styles.container}>
        
        <ScrollView style={{width: '100%', height: '100%', paddingHorizontal: '7%',}}>
          <Text style={styles.dailyTargetText}>{((targetDaily * 4) / daysInMonth).toFixed(0) - completedToday} more surveys to reach daily target!</Text>
          <View style={styles.dailyTargetOutline}>
            <View style={{ width: `${((1-(((targetDaily * 4) / daysInMonth) - completedToday) / (((targetDaily * 4) / daysInMonth).toFixed(0))) * 100)}%`, height: 25, borderRadius: 12, backgroundColor: '#1bec0d' }}></View>
          </View>

          <View style={styles.weeklySummaryContainer}>
            <Text style={styles.weeklySummaryText}>Surveys Completed</Text>
            <LineChart
              data={{
                labels: ["5/30", "5/31", "6/1", "6/2", "6/3", "6/4", "6/5"],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={Dimensions.get('window').width - 80} // from react-native
              height={220}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#fff",
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(27, 236, 13, 0.9)`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, 0.8)`,
                fillShadowGradientFrom: '#1bec0d',
                fillShadowGradientTo: '#fff',
                fillShadowGradientFromOpacity: 0.6,
                fillShadowGradientToOpacity: 0.0,
                fillShadowGradientToOffset: 5,
                fillShadowGradientFromOffset:-5,
                propsForBackgroundLines: {
                  opacity: 0 // solid background lines with no dashes
                },
                style: {
                  borderRadius: 16,
                  width: '80%',
                  marginTop: '5%'
                },
                propsForDots: {
                  r: "5",
                  strokeWidth: "2",
                  stroke: "#1bec0d"
                }
              }}
              bezier
              style={{
                marginVertical: '5%',

                borderRadius: 16,
              }}
            />
          </View>
        </ScrollView>
        <Navbar navigation={props.navigation} />
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
    marginTop: '10%',
    fontWeight: 'bold',
    color: '#2a2c33',
    textAlign: 'center',
  },
  dailyTargetOutline: {
    width: '100%',
    height: 25,
    borderRadius: 12,
    backgroundColor: '#e6e6e6',
    marginTop: '10%',
  },
  weeklySummaryText: {
    fontSize: 18,
    // marginTop: '15%',
    fontWeight: 'bold',
    color: '#2a2c33',
  },
  weeklySummaryContainer: {
    width: '100%',
    height: '68%',
    borderRadius: 12,
    backgroundColor: '#fff',
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    elevation: 3,
  },
})