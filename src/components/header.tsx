import React from 'react'
import {
    SafeAreaView,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { H1 } from '../components/h1'
import { H3 } from '../components/h3'
import Logo from '../resources/assets/icons/Logo.svg'

import { SCALE_FACTOR, GREEN_COLOR, ScreenWidth, ScreenHeight } from '../constants'
import { BackButton } from './backButton';

export const Header = (props: any) => {
    return (
        <View style={styles.main}>
            <View style={styles.subContainer1}>
                {props.backButton && <BackButton />}
                <H1>{props.title}</H1>
            </View>
            <Logo width={SCALE_FACTOR * 16} height={SCALE_FACTOR * 16} fill="#000" />

        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: SCALE_FACTOR * 10,
        position: 'absolute',
        top: SCALE_FACTOR * 20,
        width: ScreenWidth * 0.9,
        height: ScreenHeight * 0.5,
        backgroundColor: '#0C365A',
    },
    subContainer1: {
        flexDirection: 'row',
        marginBottom: SCALE_FACTOR * 15,
    },
})