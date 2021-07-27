import React, { useEffect } from 'react'
import {
    SafeAreaView,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { H1 } from '../../components/h1'
import { H2 } from '../../components/h2'
import { H3 } from '../../components/h3'

import Logo from '../../resources/assets/icons/Home.svg'
import Visa_Logo from '../../resources/assets/icons/Visa_Logo.svg'
import RemoveEye from '../../resources/assets/icons/remove_red_eye-24px.svg'
import { SCALE_FACTOR, GREEN_COLOR, ScreenHeight, ScreenWidth } from '../../constants'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useState } from 'react';
import {useSelector } from 'react-redux';

export const DebitCardView = (props: any) => {
    const [isShowCardNumber, setShowCardNumber] = useState(false)
    const userDebitCardDetails = useSelector((state) => state.UserDataReducer);
    
    return (
        <View style={styles.main}>
            <View style={styles.hideBadge}>
                <TouchableWithoutFeedback style={styles.badgeContent} onPress={() => setShowCardNumber(!isShowCardNumber)}>
                    <RemoveEye width={SCALE_FACTOR * 12} height={SCALE_FACTOR * 12} />
                    {!isShowCardNumber ?
                        <H3 style={{ fontSize: 33, color: GREEN_COLOR, position: 'absolute', left: 18 }}>/</H3>
                        : null
                    }
                    <H3 style={{ color: GREEN_COLOR, paddingLeft: 10 }}>{isShowCardNumber ? 'Hide' : 'Show'} card number</H3>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.cardContainer}>

                <View style={{ flexDirection: 'row', top: 5, justifyContent: 'flex-end', height: SCALE_FACTOR * 15 }}>
                    <Logo width={SCALE_FACTOR * 12} height={SCALE_FACTOR * 12} />
                    <H3 style={{ marginLeft: 10 }}>aspire</H3>
                </View>
                <H2>{userDebitCardDetails.username}</H2>
                <View style={styles.cardnumber}>
                    <H3 style={{ marginRight: 15 }}>{isShowCardNumber ? userDebitCardDetails.cardDetails.cardNumber1 : '****'}</H3>
                    <H3 style={{ marginRight: 15 }}>{isShowCardNumber ? userDebitCardDetails.cardDetails.cardNumber2  : '****'}</H3>
                    <H3 style={{ marginRight: 15 }}>{isShowCardNumber ? userDebitCardDetails.cardDetails.cardNumber3 : '****'}</H3>
                    <H3 style={{ marginRight: 15 }}>{userDebitCardDetails.cardDetails.cardNumber4}</H3>
                </View>

                <View style={styles.cardExp}>
                    <H3 style={{ marginRight: 15 }}>Thru: {userDebitCardDetails.cardDetails.validity } </H3>
                    <H3 style={{ marginRight: 15 }}>CVV: {userDebitCardDetails.cardDetails.cvv ? 456 : '***'}</H3>
                </View>
                <Visa_Logo width={SCALE_FACTOR * 25} height={SCALE_FACTOR * 20} fill="#000" alignSelf='flex-end' />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        // flex: 1
    },
    hideBadge: {
        top: -SCALE_FACTOR * 50,
        marginRight: SCALE_FACTOR * 9,
        alignSelf: 'flex-end',
        height: ScreenHeight * 0.06,
        width: ScreenWidth * 0.5,
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderTopLeftRadius: SCALE_FACTOR * 5,
        borderTopRightRadius: SCALE_FACTOR * 5,
    },
    badgeContent: {
        flexDirection: 'row',
        padding: 10
    },
    cardContainer: {
        height: ScreenHeight * 0.25,
        width: ScreenWidth * 0.9,
        alignSelf: 'center',
        borderRadius: SCALE_FACTOR * 5,
        backgroundColor: GREEN_COLOR,
        padding: SCALE_FACTOR * 5,
        top: -SCALE_FACTOR * 55
    },

    cardnumber: {
        flexDirection: 'row',
        marginTop: SCALE_FACTOR * 10
    },
    cardExp: {
        flexDirection: 'row',
        width: ScreenWidth * 0.5,
        marginTop: SCALE_FACTOR * 10
    },
})