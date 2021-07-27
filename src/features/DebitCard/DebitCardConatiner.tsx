import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BottomSheet} from '../../components/bottomSheet'
import { SCALE_FACTOR } from '../../constants';
import {DebitCardView} from '../DebitCard/DebitCardView'
import { FeatureOptionContainer } from './FeatureOptionContainer';
import { SpendingLimitProgressView } from './SpendingLimitProgressView';
import { actions as userAction } from './reducer'

export const DebitCardContainer = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(userAction.getUserData())
    }, [dispatch])

    return (
        <BottomSheet style={{top:SCALE_FACTOR*120}}>
            <DebitCardView />
            <SpendingLimitProgressView />
            <FeatureOptionContainer />
        </BottomSheet>
    );
};