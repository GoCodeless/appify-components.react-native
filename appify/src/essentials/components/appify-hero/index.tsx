import React, { FunctionComponent, useState, ReactNode } from "react";
import { View, Text, ImageBackground, ImageSourcePropType } from "react-native";
import { AppifyButton, AppifyButtonStateStyles } from "../../elements/appify-button";
import { defaultStyles } from "./styles";

export interface AppifyHeroStateStyles {
    default?: object | null;
};

export interface AppifyHeroProperties {
    onPress?: () => void;
    disabled?: boolean;
    titleLabel?: string | ReactNode;
    subtitleLabel?: string | ReactNode;
    buttonLabel?: string | ReactNode;
    image: ImageSourcePropType;

    buttonTextStyles?: AppifyButtonStateStyles | null;
    buttonButtonStyles?: AppifyButtonStateStyles | null;
    containerStyles?: AppifyHeroStateStyles | null;
    innerContainerStyles?: AppifyHeroStateStyles | null;
    imageStyles?: AppifyHeroStateStyles | null;
    titleStyles?: AppifyHeroStateStyles | null;
    subtitleStyles?: AppifyHeroStateStyles | null;
    buttonContainerStyles?: AppifyHeroStateStyles | null;
};

const STATE_DEFAULT = 0;

const emptyStyles = {default:null};

export const AppifyHero: FunctionComponent<AppifyHeroProperties> = (props) => {
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
                source={props.image}
                imageStyle={imageStyles}
                style={containerStyles}>
            <View style={innerContainerStyles}>
                {props.titleLabel != undefined ?
                    <Text style={titleStyles}>
                        {props.titleLabel}
                    </Text>
                    : null}
                {props.subtitleLabel != undefined ?
                    <Text style={subtitleStyles}>
                        {props.subtitleLabel}
                    </Text>
                    : null}
                {props.buttonLabel != undefined ?
                    <View style={buttonContainerStyles}>
                        <AppifyButton
                            onPress={props.onPress}
                            buttonStyles={props.buttonButtonStyles}
                            textStyles={props.buttonTextStyles}
                            label={props.buttonLabel}
                            disabled={props.disabled}
                        />
                    </View>
                    : null}
            </View>
        </ImageBackground>
    );
};