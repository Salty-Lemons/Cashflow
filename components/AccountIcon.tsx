import React, { useEffect } from 'react'
import { Image, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from '../components/Themed'
import { getUser } from '../api/api-utils';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AccountIcon({handleIconClick}: {handleIconClick: any}) {
    
    const user = getUser();

    const getProfilePicture = () => {
        if (user !== undefined && user?.photoURL !== undefined) {
            return {uri: user.photoURL};
        } else {
            return undefined
        }
    }

    const url = getProfilePicture();
    
  return (
        <Pressable onPress={() => handleIconClick()}>
        {url?.uri === null?
            <MaterialCommunityIcons name="account" size={30} style={styles.icon} />:
            <Image style={styles.icon} source={getProfilePicture()} />
        }
        </Pressable>
  )
}

const styles = StyleSheet.create({
    icon: {
        // position: 'relative',
        // paddingTop: 5,
        // width: 50,
        // height: 50,
        borderRadius: 50,
        color: '#adabac',
        opacity: .6,
    }
})
