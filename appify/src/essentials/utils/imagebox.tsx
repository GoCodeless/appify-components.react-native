import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View, Image, ViewStyle, ImageStyle, ImageSourcePropType } from "react-native";
import getSize from "./imagesize";

export interface ImageBoxProperties {
    boxStyle?: ViewStyle;
    imageStyle?: ImageStyle;
    source: ImageSourcePropType;
};

const defaultStyles = StyleSheet.create({
    box: {
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: -1,
    },
});

const emptyStyles = {};

export const ImageBox: FunctionComponent<ImageBoxProperties> = (props) => {
    var [aspect, setAspect] = useState(1);
    
    getSize(props.source).then((sz)=>{
        setAspect(sz.width / sz.height);
    });

    var propsBoxStyle = props.boxStyle || emptyStyles;
    var propsImageStyle = props.imageStyle || emptyStyles;

    var boxStyle: ViewStyle = {...defaultStyles.box, ...propsBoxStyle};

    var imageStyle: ImageStyle = {...defaultStyles.image, ...propsImageStyle};

    if(boxStyle.aspectRatio === -1) {
        boxStyle.aspectRatio = aspect;
    }
    if(imageStyle.aspectRatio === -1) {
        imageStyle.aspectRatio = aspect;
    }
    
    return (
        <View style={boxStyle}>
            <Image
                source={props.source}
                style={imageStyle}
            />
        </View>
    );
};