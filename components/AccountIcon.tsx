import React, { useEffect } from 'react'
import { Image, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUser } from '../api/api-utils';
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';

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
            <FontAwesome size={38} style={styles.icon} name='user-circle-o' />:
            <Image style={styles.icon} source={getProfilePicture()} />
        }
        </Pressable>
        <Pressable onPress={() => handleIconClick()}>
            <MaterialIcons name="notifications-none" size={38} color="black" style={styles.icon} />
        </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%', 
        position: 'absolute',
        top: 0,
        alignContent: 'center',
        justifyContent: 'space-between',
        zIndex: 2,
    },
    icon: {
        position: 'relative',
        marginLeft: 15,
        width: 50,
        height: 50,
        marginBottom: 20,
        borderRadius: 50,
        color: '#fff'
    }
})
