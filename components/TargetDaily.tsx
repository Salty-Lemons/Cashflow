import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from './Themed'

export default function TargetDaily({userDocument}: {userDocument: any}) {

    const targetDaily = userDocument.targetDaily
    const completedToday = userDocument.completedToday

    const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()

  const daysInMonth = 32 - new Date(year, month, 32).getDate()
  return (
    <View>
        <Text style={styles.dailyTargetText}>{((targetDaily * 4) / daysInMonth).toFixed(0) - completedToday} more surveys to reach daily target!</Text>
          <View style={styles.dailyTargetOutline}>
            <View style={{ width: `${((1-(((targetDaily * 4) / daysInMonth) - completedToday) / (((targetDaily * 4) / daysInMonth).toFixed(0))) * 100)}%`, height: 25, borderRadius: 12, backgroundColor: '#1bec0d' }}></View>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    dailyTargetText: {
        fontSize: 18,
        marginTop: '10%',
        fontWeight: 'bold',
        color: '#2a2c33',
        textAlign: 'center',
      },
      dailyTargetOutline: {
        height: 25,
        borderRadius: 12,
        backgroundColor: '#e6e6e6',
        marginTop: '10%',
      },
})
