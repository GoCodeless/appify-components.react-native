import React, { FunctionComponent, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { AppifyButton, AppifyButtonStateStyles } from "../../elements/appify-button";
import { defaultStyles } from "./styles";

export interface AppifyCTAStateStyles {
    default?: object | null;
};

export interface AppifyCTAProperties {
    onPress?: () => void;
    disabled?: boolean;
    titleLabel: string;
    subtitleLabel?: string;
    buttonLabel: string;
    image: string;

    buttonTextStyles?: AppifyButtonStateStyles | null;
    buttonButtonStyles?: AppifyButtonStateStyles | null;
    containerStyles?: AppifyCTAStateStyles | null;
    innerContainerStyles?: AppifyCTAStateStyles | null;
    imageStyles?: AppifyCTAStateStyles | null;
    titleStyles?: AppifyCTAStateStyles | null;
    subtitleStyles?: AppifyCTAStateStyles | null;
    buttonContainerStyles?: AppifyCTAStateStyles | null;
};

const STATE_DEFAULT = 0;

const emptyStyles = {default:null, disabled:null};

export const AppifyCTA: FunctionComponent<AppifyCTAProperties> = (props) => {
    var state = STATE_DEFAULT;
    
    var propsContainerStyles = props.containerStyles || emptyStyles;
    var propsInnerContainerStyles = props.innerContainerStyles || emptyStyles;
    var propsImageStyles = props.imageStyles || emptyStyles;
    var propsTitleStyles = props.titleStyles || emptyStyles;
    var propsSubtitleStyles = props.subtitleStyles || emptyStyles;
    var propsButtonContainerStyles = props.buttonContainerStyles || emptyStyles;

    var containerStyles = (
        {...defaultStyles.containerDefault, ...propsContainerStyles.default}
    );

    var innerContainerStyles = (
        {...defaultStyles.innerContainerDefault, ...propsInnerContainerStyles.default}
    );

    var imageStyles = (
        {...defaultStyles.imageDefault, ...propsImageStyles.default}
    );

    var titleStyles = (
        {...defaultStyles.titleDefault, ...propsTitleStyles.default}
    );

    var subtitleStyles = (
        {...defaultStyles.subtitleDefault, ...propsSubtitleStyles.default}
    );

    var buttonContainerStyles = (
        {...defaultStyles.buttonContainerDefault, ...propsButtonContainerStyles.default}
    );

    return (
        <ImageBackground
                source={{uri:props.image}}
                imageStyle={imageStyles}
                style={containerStyles}>
            <View style={innerContainerStyles}>
                <Text style={titleStyles}>
                    {props.titleLabel}
                </Text>
                {props.subtitleLabel ?
                    <Text style={subtitleStyles}>
                        {props.subtitleLabel}
                    </Text>
                    : null}
                <View style={buttonContainerStyles}>
                    <AppifyButton
                        onPress={props.onPress}
                        buttonStyles={props.buttonButtonStyles}
                        textStyles={props.buttonTextStyles}
                        label={props.buttonLabel}
                        disabled={props.disabled}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};