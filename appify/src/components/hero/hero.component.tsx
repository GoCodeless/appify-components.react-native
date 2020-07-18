import React, { FunctionComponent, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { ButtonComponent, AppifyButtonStateStyles } from "../button/button.component";
import { defaultStyles } from "./hero.styles";

export interface AppifyHeroStateStyles {
    default: object | null;
    disabled: object | null;
};

export interface AppifyHeroProperties {
    onPress?: () => void;
    disabled?: boolean;
    titleLabel: string;
    subtitleLabel?: string;
    buttonLabel: string;
    image: string;

    buttonTextStyles: AppifyButtonStateStyles;
    buttonButtonStyles: AppifyButtonStateStyles;
    containerStyles: AppifyHeroStateStyles;
    imageStyles: AppifyHeroStateStyles;
    titleStyles: AppifyHeroStateStyles;
    subtitleStyles: AppifyHeroStateStyles;
};

const STATE_DEFAULT = 0,
      STATE_DISABLED = 1;

export const HeroComponent: FunctionComponent<AppifyHeroProperties> = (props) => {
    var state = props.disabled ? STATE_DISABLED : STATE_DEFAULT;
    
    var containerStyles = (
        state === STATE_DISABLED ? {...defaultStyles.containerDisabled, ...props.containerStyles.disabled}
        : {...defaultStyles.containerDefault, ...props.containerStyles.default}
    );

    var imageStyles = (
        state === STATE_DISABLED ? {...defaultStyles.imageDisabled, ...props.imageStyles.disabled}
        : {...defaultStyles.imageDefault, ...props.imageStyles.default}
    );

    var titleStyles = (
        state === STATE_DISABLED ? {...defaultStyles.titleDisabled, ...props.titleStyles.disabled}
        : {...defaultStyles.titleDefault, ...props.titleStyles.default}
    );

    var subtitleStyles = (
        state === STATE_DISABLED ? {...defaultStyles.subtitleDisabled, ...props.subtitleStyles.disabled}
        : {...defaultStyles.subtitleDefault, ...props.subtitleStyles.default}
    );

    return (
        <ImageBackground source={{uri:props.image}} imageStyle={imageStyles}>
            <View style={containerStyles}>
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