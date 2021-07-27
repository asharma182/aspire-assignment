import React, { FC, Component, useEffect, Suspense } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SCALE_FACTOR, TEXT_COLOR, SUB_TEXT_COLOR } from '../../constants';
import { FeatureOption } from './featureOption'
import { H3 } from '../../components/h3'
import Logo from '../../resources/assets/icons/Logo.svg'
import {Toggle} from '../../components/toggle'

interface Props {

}
export const FeatureOptionContainer: FC<Props> = (props: any) => {
    return (
        <View  style={{top:-SCALE_FACTOR*55}}>
        {FeatureOption.map((item, index)=> (
            <Item key={index} title={item.title} subTitle={item.subTitle} icon={item.icon_image} />
          ))}
        </View>
    )
}


const Item = ({ title, subTitle, icon }) => {
    return (
        <View style={styles.item}>
            <Image
                style={styles.image}
                source={icon}
            />
            <View>
                <H3 style={styles.title}>{title}</H3>
                <H3 style={styles.subtitle}>{subTitle}</H3>
            </View>
           {(title==='Weekly spending limit' 
           || title ==='Freeze card')
            && <Toggle title={title}/>}
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        // marginVertical: 8,
        // marginHorizontal: 16,
        flexDirection: 'row',
        marginBottom: 10
    },
    image: {
        width: SCALE_FACTOR * 20,
        height: SCALE_FACTOR * 20,
        resizeMode: 'contain',
        margin: 5

    },
    title: {
        color: TEXT_COLOR
    },
    subtitle: {
        marginTop: 8,
        color: SUB_TEXT_COLOR,
        opacity: 0.4,
        fontSize: SCALE_FACTOR * 6
    },
});



