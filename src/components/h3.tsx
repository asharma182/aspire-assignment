import React from 'react'
import { Text, StyleSheet, Dimensions } from 'react-native'
import {SCALE_FACTOR,WHITE_COLOR} from '../constants'

export const H3 = (props: any) => {
    return(
        <Text style={[styles.textStyle, props.style]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
  textStyle:{
      fontSize: SCALE_FACTOR * 8,
      color: WHITE_COLOR,
  }  
})