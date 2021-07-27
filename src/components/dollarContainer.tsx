import React from 'react';
import { SCALE_FACTOR, GREEN_COLOR, ScreenWidth, ScreenHeight } from '../constants'
import {
    StyleSheet,
} from 'react-native';
import { H3 } from '../components/h3'

export const DollarContainer = (props) => {
    return (
        <H3 style={[styles.dollarContainer, props.style]}>$$</H3>
    )
}

const styles = StyleSheet.create({
    dollarContainer: {
        height: SCALE_FACTOR * 10,
        width: SCALE_FACTOR * 14,
        textAlign: 'center',
        margin: SCALE_FACTOR * 4,
        padding: SCALE_FACTOR,
        fontSize: SCALE_FACTOR * 7,
        fontWeight: 'bold',
        backgroundColor: GREEN_COLOR
    }
})