import React from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import { GREEN_COLOR, SCALE_FACTOR } from '../constants'
import { H1 } from './h1'

export const Button = (props) => {
    return (
        <TouchableOpacity style={{...styles.button, ...props.style}} onPress={props.onpress}>
            <H1 style={props.textStyle}>{props.title}</H1>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: SCALE_FACTOR * 10,
        padding: 10,
        borderRadius: SCALE_FACTOR * 15,
    },

})