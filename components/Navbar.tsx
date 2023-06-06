import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AccountIcon from './AccountIcon';
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';

export default function Navbar({handleIconClick}: {handleIconClick: any}) {
  return (
    <View style={styles.container}>
        <AntDesign name="home" size={30} style={styles.icon} />
        <MaterialIcons name="attach-money" size={30} style={styles.icon} />
        <View style={styles.survey}>
            <MaterialCommunityIcons name="clipboard-check-outline" size={30} style={styles.icon} />
        </View>
        <MaterialCommunityIcons name="finance" size={30} style={styles.icon} />
        <AccountIcon handleIconClick={handleIconClick}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent:'space-around',
        backgroundColor: '#fff',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 25,
        paddingTop: 10,
    },
    survey: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#1bec0d',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 1, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 2,
        
    },
    icon: {
        color: '#adabac',
        opacity: 0.5,
    }
});