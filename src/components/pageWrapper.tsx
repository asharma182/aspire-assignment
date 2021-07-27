import React, { FC, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { Header } from './header';

export const PageWrapper = (props) => {
    return (
        <SafeAreaView style={styles.main} >
            <Header backButton={props.isBackButton} title={props.title}/>
           {props.children}
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    main: {
        backgroundColor: '#0C365A',
        flex: 1
    }
})