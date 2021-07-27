import React, { FC, useEffect, useRef } from 'react';
import { BottomSheet } from '../../components/bottomSheet'
import { DebitCardView } from '../DebitCard/DebitCardView'
import { View, Text, StyleSheet } from 'react-native'
import { GREEN_COLOR, SCALE_FACTOR, ScreenHeight, ScreenWidth } from '../../constants';
// import { FeatureOptionContainer } from './FeatureOptionContainer';
import Limit from '../../resources/assets/icons/Group 1242.svg'
import { DollarContainer } from '../../components/dollarContainer';
import { TextInput } from 'react-native-gesture-handler';
import { H3 } from '../../components/h3';
import { Button } from '../../components/button';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { actions as userAction } from '../DebitCard/reducer'

export const SpendingLimitContainer = () => {
    const [number, onChangeNumber] = React.useState(0);
    const [savedAmount, onSavedAmount] = React.useState(0);
    const navigation = useNavigation()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(number, savedAmount)
        onChangeNumber(number)
    }, [number, savedAmount])

    const afterSave = () => {
        dispatch(userAction.setWeeklySpendingLimit(number))
        navigation.goBack()
    }

    return (
        <BottomSheet style={{ top: SCALE_FACTOR * 50 }}>
            <View style={styles.main}>
                <View style={styles.spendingContainer}>
                    <View style={styles.subConatiner}>
                        <Limit width={SCALE_FACTOR * 15} height={SCALE_FACTOR * 15} fill="#000" alignSelf='flex-start' />
                        <H3 style={styles.text}>Set a weekly debit card spending limit</H3>
                    </View>

                    <View style={styles.inputContainer}>
                        <DollarContainer style={styles.dollarPosition} />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={String(number)}
                            maxLength={5}
                            placeholder="Enter Amount"
                            keyboardType="numeric"
                        />
                    </View>

                    <View>
                        <H3 style={{ ...styles.text, ...styles.textSmall }}>Here weekly means the last 7 days - not the calendar week</H3>
                    </View>

                    <View style={styles.selectAmount}>
                        <Button title={5000} style={styles.selectAmountButton} textStyle={styles.textStyle} onpress={() => onChangeNumber(5000)} />
                        <Button title={10000} style={styles.selectAmountButton} textStyle={styles.textStyle} onpress={() => onChangeNumber(10000)} />
                        <Button title={20000} style={styles.selectAmountButton} textStyle={styles.textStyle} onpress={() => onChangeNumber(20000)} />
                    </View>
                </View>
                <Button title={'Save'}
                    style={number > 0 ? styles.saveButtonStyleAfter : styles.saveButtonStyle}
                    textStyle={styles.saveTextStyle}
                    onpress={() => { number > 0 ? afterSave() : null }} />
            </View>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    main: {
        justifyContent: 'space-between',
        height: ScreenHeight * 0.8,
        //  flex: 1
    },
    spendingContainer: {
        padding: 5,
        margin: SCALE_FACTOR * 10,
    },
    subConatiner: {
        flexDirection: 'row'
    },
    text: {
        marginLeft: 10,
        padding: 5,
        fontSize: SCALE_FACTOR * 7,
        color: '#222222'
    },
    textSmall: {
        fontSize: SCALE_FACTOR * 5,
        opacity: 0.4
    },
    dollarPosition: {
        marginTop: 15
    },
    inputContainer: {
        flexDirection: 'row',
        alignContent: 'center'
    },
    input: {
        height: 30,
        width: ScreenWidth * 0.7,
        margin: 12,
        padding: 1,
        fontSize: 30,
        borderBottomWidth: 1,
    },
    selectAmount: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    selectAmountButton: {
        borderRadius: 10,
        width: ScreenWidth * 0.3,
        backgroundColor: 'grey',
        opacity: 0.5
    },
    textStyle: {
        fontSize: SCALE_FACTOR * 8,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    saveTextStyle: {
        fontSize: SCALE_FACTOR * 10,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    saveButtonStyle: {
        backgroundColor: '#EEEEEE',
        height: ScreenHeight * 0.06
    },
    saveButtonStyleAfter: {
        height: ScreenHeight * 0.06,
        backgroundColor: GREEN_COLOR,
        margin: SCALE_FACTOR * 10,
        padding: 10,
        borderRadius: SCALE_FACTOR * 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})