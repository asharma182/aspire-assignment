import React from 'react'
import { Text, StyleSheet, Dimensions } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const H1 = (props: any) => {
    return(
        <Text style={[styles.textStyle, props.style]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
  textStyle:{
      fontSize: (screenHeight/screenWidth ) * 12,
      color:'#fff',
      fontWeight:'bold'
  }  
})