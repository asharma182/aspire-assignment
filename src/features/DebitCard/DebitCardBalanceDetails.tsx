import React from 'react'
import {
    SafeAreaView,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { H1 } from '../../components/h1'
import { H3 } from '../../components/h3'
import Logo from '../../resources/assets/icons/Logo.svg'
import { SCALE_FACTOR, GREEN_COLOR, ScreenWidth, ScreenHeight } from '../../constants'
import { Header } from '../../components/header';
import {DollarContainer} from '../../components/dollarContainer'
import { useSelector } from 'react-redux';

export const DebitCardBalanceDetails = (props: any) => {
    const userDebitCardDetails = useSelector((state) => state.UserDataReducer);
    
    return (
        <View style={styles.main}>
            <View style={styles.subConatiner2}>
                <H3>Available Balance</H3>
                <View style={styles.cashBalance}>
                    <DollarContainer />
                    <H1 style={styles.amount}>{userDebitCardDetails.availableBalance}</H1>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        margin: SCALE_FACTOR * 10,
        position: 'absolute',
        top: SCALE_FACTOR * 50,
        width: ScreenWidth * 0.9,
        height: ScreenHeight * 0.2,
    },
    subContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SCALE_FACTOR * 15,
    },
    subConatiner2: {

    },
    cashBalance: {
        flexDirection: 'row',
    },
    amount: {
        margin: SCALE_FACTOR * 2,
    }
})