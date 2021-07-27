import React, { FC } from 'react';
import { PageWrapper } from '../../components/pageWrapper';
import { SpendingLimitContainer } from './SpendingLimitContainer';

interface Props {

}

export const SpendingLimitScreen: FC<Props> = () => {

    return (
        <PageWrapper isBackButton={true} title={'Spending Limit'}>
            <SpendingLimitContainer />
        </PageWrapper>
    );
};
