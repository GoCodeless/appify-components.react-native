import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Colors } from "./colors";

type StyleMap = ViewStyle | TextStyle | ImageStyle;

const defaultFont = 'sans-serif';

// styles
export const header1: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 64,
    lineHeight: 78,
    color: Colors.black,
};
export const header2: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 56,
    lineHeight: 68,
    color: Colors.black,
};
export const header3: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 49,
    color: Colors.black,
};
export const header4: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 39,
    color: Colors.black,
};
export const header5: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 29,
    color: Colors.black,
};
export const header6: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    color: Colors.black,
};
export const subtitle: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 27,
    color: Colors.black,
};
export const paragraph: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: Colors.black,
};
export const paragraphStrong: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: Colors.black,
};
export const caption: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.black,
};
export const captionStrong: StyleMap = {
    fontFamily: defaultFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.black,
};
export const clearVerticalSpace: StyleMap = {
    paddingVertical: undefined,
    paddingTop: undefined,
    paddingBottom: undefined,
    marginVertical: undefined,
    marginTop: undefined,
    marginBottom: undefined,
};
export const clearHorizontalSpace: StyleMap = {
    paddingHorizontal: undefined,
    paddingLeft: undefined,
    paddingRight: undefined,
    marginHorizontal: undefined,
    marginLeft: undefined,
    marginRight: undefined,
};
export const clearSpace: StyleMap = {
    ...clearVerticalSpace,
    ...clearHorizontalSpace,
    padding: 0,
    margin: 0,
};