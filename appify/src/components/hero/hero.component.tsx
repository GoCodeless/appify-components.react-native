import React, { FunctionComponent, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { ButtonComponent, AppifyButtonStateStyles } from "../button/button.component";
import { defaultStyles } from "./hero.styles";

export interface AppifyHeroStateStyles {
    default?: object | null;
    disabled?: object | null;
};

export interface AppifyHeroProperties {
    onPress?: () => void;
    disabled?: boolean;
    titleLabel: string;
    subtitleLabel?: string;
    buttonLabel: string;
    image: string;

    buttonTextStyles?: AppifyButtonStateStyles | null;
    buttonButtonStyles?: AppifyButtonStateStyles | null;
    containerStyles?: AppifyHeroStateStyles | null;
    innerContainerStyles?: AppifyHeroStateStyles | null;
    imageStyles?: AppifyHeroStateStyles | null;
    titleStyles?: AppifyHeroStateStyles | null;
    subtitleStyles?: AppifyHeroStateStyles | null;
};

const STATE_DEFAULT = 0,
      STATE_DISABLED = 1;

const emptyStyles = {default:null, disabled:null};

export const HeroComponent: FunctionComponent<AppifyHeroProperties> = (props) => {
    var state = props.disabled ? STATE_DISABLED : STATE_DEFAULT;

    var propsContainerStyles = props.containerStyles || emptyStyles;
    var propsInnerContainerStyles = props.innerContainerStyles || emptyStyles;
    var propsImageStyles = props.imageStyles || emptyStyles;
    var propsTitleStyles = props.titleStyles || emptyStyles;
    var propsSubtitleStyles = props.subtitleStyles || emptyStyles;
    
    var containerStyles = (
        state === STATE_DISABLED ? {...defaultStyles.containerDisabled, ...propsContainerStyles.disabled}
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
                <ButtonComponent
                    onPress={props.onPress}
                    buttonStyle={props.buttonButtonStyles}
                    textStyle={props.buttonTextStyles}
                    label={props.buttonLabel}
                    disabled={props.disabled}
                />
            </View>
        </ImageBackground>
    );
};