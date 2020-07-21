import { ViewStyle, TextStyle, ImageStyle } from "react-native";

export interface ColorMap {
    [property:string]: string;
}

type StyleMap = ViewStyle | TextStyle | ImageStyle;

const defaultFont = 'sans-serif';

// colors
export const colors: ColorMap = {
    primary:   '#2400FF',
    secondary: '#FF00B8',
    success:   '#3BCB2F',
    warning:   '#F2B61C',
    error:     '#E70808',
    black:     '#050A16',
    darkGrey:  '#434855',
    grey:      '#717683',
    lightGrey: '#C8CDDB',
    white:     '#FFFFFF',
};

// styles
export const header1: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 64,
    lineHeight: 78,
    color: colors.black,
};
export const header2: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 56,
    lineHeight: 68,
    color: colors.black,
};
export const header3: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 49,
    color: colors.black,
};
export const header4: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 39,
    color: colors.black,
};
export const header5: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 29,
    color: colors.black,
};
export const header6: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    color: colors.black,
};
export const subtitle: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 27,
    color: colors.black,
};
export const paragraph: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: colors.black,
};
export const paragraphStrong: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: colors.black,
};
export const caption: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
    color: colors.black,
};
export const captionStrong: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 16,
    color: colors.black,
};