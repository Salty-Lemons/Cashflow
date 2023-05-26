import React, { useEffect } from 'react'
import { Image, StyleSheet, Pressable } from 'react-native'
import { View } from './Themed'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUser } from '../api/api-utils';
import { FontAwesome } from '@expo/vector-icons'

export default function AccountIcon({handleIconClick}) {
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
    <SafeAreaView style={styles.container}>
        <Pressable onPress={() => handleIconClick()}>
        {url?.uri === null?
            <FontAwesome size={30} style={styles.icon} name='user' />:
            <Image style={styles.icon} source={getProfilePicture()} />
        }
        </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 20,
        borderRadius: 50,
        // backgroundColor: 'blue'
    }
})
