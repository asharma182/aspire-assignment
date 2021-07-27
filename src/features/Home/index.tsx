import React, { FC, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';

import { BottomSheet } from '../../components/bottomSheet'
import { ScrollView } from 'react-native-gesture-handler';
import { DebitCardBalanceDetails } from '../DebitCard/DebitCardBalanceDetails'
import {PageWrapper} from '../../components/pageWrapper'
import { DebitCardContainer } from '../DebitCard/DebitCardConatiner'
interface Props {

}

export const HomeScreen: FC<Props> = () => {
    return (
        <PageWrapper isBackButton={false} title={'Debit Card'}>
            <DebitCardBalanceDetails />
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} >
                <DebitCardContainer />
            </ScrollView>
        </PageWrapper>
    );
};
