import { useNavigation } from '@react-navigation/core';
import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SCALE_FACTOR, GREEN_COLOR, ScreenWidth, ScreenHeight } from '../constants'

export const BackButton = () => {
    const navigation = useNavigation()
    return (
        <View style={{top:10}}>
        <TouchableOpacity
        style={styles.mainContainer}
        onPress={() => navigation.navigate('DebitCardScreen')}
        >
            <Text style={styles.back}>{'<'}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        top:-20,
        marginRight:5
    },
    back: {
        fontSize: 40,
        color:'#fff'
    }
})