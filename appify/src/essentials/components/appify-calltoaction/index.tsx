import React, { FunctionComponent, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { AppifyButton, AppifyButtonStateStyles } from "../../elements/appify-button";
import { defaultStyles } from "./styles";

export interface AppifyCTAStateStyles {
    default?: object | null;
    disabled?: object | null;
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
};

const STATE_DEFAULT = 0,
      STATE_DISABLED = 1;

const emptyStyles = {default:null, disabled:null};

export const AppifyCTA: FunctionComponent<AppifyCTAProperties> = (props) => {
    var state = props.disabled ? STATE_DISABLED : STATE_DEFAULT;
    
    var propsContainerStyles = props.containerStyles || emptyStyles;
    var propsInnerContainerStyles = props.innerContainerStyles || emptyStyles;
    var propsImageStyles = props.imageStyles || emptyStyles;
    var propsTitleStyles = props.titleStyles || emptyStyles;
    var propsSubtitleStyles = props.subtitleStyles || emptyStyles;

    var containerStyles = (
        state === STATE_DISABLED ? {...defaultStyles.containerDisabled, ...propsContainerStyles, ...propsContainerStyles.disabled}
        : {...defaultStyles.containerDefault, ...propsContainerStyles.default}
    );

    var innerContainerStyles = (
        state === STATE_DISABLED ? {...defaultStyles.innerContainerDisabled, ...propsInnerContainerStyles.disabled}
        : {...defaultStyles.innerContainerDefault, ...propsInnerContainerStyles.default}
    );

    var imageStyles = (
        state === STATE_DISABLED ? {...defaultStyles.imageDisabled, ...propsImageStyles.disabled}
        : {...defaultStyles.imageDefault, ...propsImageStyles.default}
    );

    var titleStyles = (
        state === STATE_DISABLED ? {...defaultStyles.titleDisabled, ...propsTitleStyles.disabled}
        : {...defaultStyles.titleDefault, ...propsTitleStyles.default}
    );

    var subtitleStyles = (
        state === STATE_DISABLED ? {...defaultStyles.subtitleDisabled, ...propsSubtitleStyles.disabled}
        : {...defaultStyles.subtitleDefault, ...propsSubtitleStyles.default}
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
                <AppifyButton
                    onPress={props.onPress}
                    buttonStyles={props.buttonButtonStyles}
                    textStyles={props.buttonTextStyles}
                    label={props.buttonLabel}
                    disabled={props.disabled}
                />
            </View>
        </ImageBackground>
    );
};