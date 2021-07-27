import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { H3 } from '../../components/h3';
import { GREEN_COLOR, SCALE_FACTOR, ScreenHeight, ScreenWidth } from '../../constants';
import { actions as userAction } from './reducer'

export const SpendingLimitProgressView = () => {
    const userDebitCardDetails = useSelector((state) => state.UserDataReducer);
    const [spendingValue, setspendingValue] = useState(0)
    const dispatch = useDispatch()
        
    console.log(userDebitCardDetails)
    const spendMoney = () => {
        Alert.prompt(
            'How much money do you want to spend',
            'Please Enter',
            (text) => setspendingValue(+text),
            'plain-text',
            '',
            'number-pad'
        )
    }
    const progressStatus = userDebitCardDetails.availableBalance / (userDebitCardDetails.weeklySpendingLimit || 1 ) ?? 1

    useEffect(() => {
        dispatch(userAction.setAvailableSpendingLimit(spendingValue))
    }, [dispatch, spendingValue])

    return (
        <View style={styles.progressBar}>
            <View style={styles.limitDetails}>
                <H3 style={styles.text}>Debit card spending limit</H3>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={spendMoney}>
                        <H3 style={styles.text}>{'$' + userDebitCardDetails.availableBalance}</H3>
                    </TouchableOpacity>
                    <H3 style={styles.text}>{'|'}</H3>
                    <H3 style={styles.text}>{'$' + userDebitCardDetails.weeklySpendingLimit}</H3>
                </View>
            </View>
            <View style={styles.barContainer}>
                <View style={{ ...styles.progressStatus, width: (ScreenWidth * 0.91) * progressStatus  }}>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    progressBar: {
        top: -SCALE_FACTOR * 55,
        justifyContent: 'space-between',
        padding: SCALE_FACTOR * 8
    },
    limitDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        margin: 5,
        fontSize: SCALE_FACTOR * 6,
        color: '#222222'
    },
    barContainer: {
        height: ScreenHeight * 0.02,
        width: ScreenWidth * 0.9,
        alignSelf: 'center',
        borderRadius: SCALE_FACTOR * 5,
        backgroundColor: '#b8ffdb',
        //    opacity:0.1
    },
    progressStatus: {
        height: ScreenHeight * 0.02,
        alignSelf: 'flex-start',
        borderRadius: SCALE_FACTOR * 5,
        backgroundColor: GREEN_COLOR,
        opacity: 1
    },
})