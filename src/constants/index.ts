import {Dimensions} from 'react-native';
//APP LAYOUT
export const ScreenWidth = Math.round(Dimensions.get('window').width);
export const ScreenHeight = Math.round(Dimensions.get('window').height);

//Added to maintain fludity all over devices
export const SCALE_FACTOR = ScreenHeight/ScreenWidth


//COLORS
export const BACKGROUND = '#0C365A'
export const WHITE_COLOR = '#FFFFFF'
export const GREEN_COLOR = '#01D167'
export const SUB_TEXT_COLOR = '#222222'
export const TEXT_COLOR = '#25345F'