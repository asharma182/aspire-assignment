import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SCALE_FACTOR, GREEN_COLOR, ScreenWidth, ScreenHeight } from '../constants'

export const BottomSheet = (props: any) => {
    return (
        <View style={[styles.mainContainer, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height:ScreenHeight * 1.04,
        backgroundColor:'#fff',
        borderTopLeftRadius: SCALE_FACTOR * 15,
        borderTopRightRadius: SCALE_FACTOR * 15,
    },
    debitCardDetails: {
        margin: 20
    }
})