import React, { Dimensions } from "react-native";
const {min, max} = Math;

export const {width, height} = Dimensions.get('window');
export const vw = width / 100;
export const vh = height / 100;
export const vmin = min(vw,vh);
export const vmax = max(vw,vh);