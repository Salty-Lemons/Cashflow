import React from 'react'
import { View, StyleSheet, Platform, Text } from 'react-native'

export default function WelcomeMessage({userDocument, isHomepage}: {userDocument: any, isHomepage: any}) {

  return (
    <View style={isHomepage?styles.wrapper:styles.wrapperNoHomepage}>
        <View>
            {isHomepage?<Text style={styles.welcomeText} >Welcome, {userDocument.displayName}</Text>:<View style={{ marginTop: Platform.OS === 'ios' ? 35: 20 }}/>}
            <Text style={styles.totalPointsText} >Total Cashflow Points</Text>
            <Text style={styles.pointsText}>{(userDocument.points)}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    
    wrapper: {
        width: '100%',
        height: '20%',
        backgroundColor:"#fff",
        justifyContent: 'flex-start',
        paddingTop: 10,
        shadowOffset: { width: 1, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.15,
        elevation: 2,
    },
        welcomeText: {
        fontSize: 24,
        marginTop: Platform.OS === 'ios' ? 50: 32,
        paddingHorizontal: '7%',
        color: '#2a2c33',
        fontWeight: 'bold',
    },
    totalPointsText: {
        fontSize: 18,
        marginTop: 7,
        paddingHorizontal: '7%',
        color: '#2a2c33',
    },
    pointsText: {
        fontSize: 24,
        marginTop: 7,
        paddingHorizontal: '7%',
        color: '#2a2c33',
    },
    wrapperNoHomepage: {
        width: '100%',
        height: '15%',
        backgroundColor:"#fff",
        justifyContent: 'flex-start',
        paddingTop: 10,
        shadowOffset: { width: 1, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.15,
        elevation: 2,
    }
});
