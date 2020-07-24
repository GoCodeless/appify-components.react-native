import React, { FunctionComponent, useState } from "react";
import { View, Text, Image } from "react-native";
import { AppifyButton, AppifyButtonStateStyles } from "../../elements/appify-button";
import { defaultStyles } from "./styles";

export interface AppifyFeatureStateStyles {
    default?: object | null;
};

export interface AppifyFeatureProperties {
    onPress?: () => void;
    titleLabel: string;
    description: string;
    buttonLabel: string;
    image: string;
    disabled?: boolean;

    buttonButtonStyles?: AppifyButtonStateStyles | null;
    buttonTextStyles?: AppifyButtonStateStyles | null;
    containerStyles?: AppifyFeatureStateStyles | null;
    imageStyles?: AppifyFeatureStateStyles | null;
    titleStyles?: AppifyFeatureStateStyles | null;
    descriptionStyles?: AppifyFeatureStateStyles | null;
    buttonContainerStyles?: AppifyFeatureStateStyles | null;
};

const STATE_DEFAULT = 0;

const emptyStyles = {default:null};

export const AppifyFeature: FunctionComponent<AppifyFeatureProperties> = (props) => {
    var state = STATE_DEFAULT;

    var propsContainerStyles = props.containerStyles || emptyStyles;
    var propsImageStyles = props.imageStyles || emptyStyles;
    var propsTitleStyles = props.titleStyles || emptyStyles;
    var propsDescriptionStyles = props.descriptionStyles || emptyStyles;
    var propsButtonContainerStyles = props.buttonContainerStyles || emptyStyles;

    var containerStyles = (
        {...defaultStyles.containerDefault, ...propsContainerStyles.default}
    );

    var imageStyles = (
        {...defaultStyles.imageDefault, ...propsImageStyles.default}
    );

    var titleStyles = (
        {...defaultStyles.titleDefault, ...propsTitleStyles.default}
    );

    var descriptionStyles = (
        {...defaultStyles.descriptionDefault, ...propsDescriptionStyles.default}
    );

    var buttonContainerStyles = (
        {...defaultStyles.buttonContainerDefault, ...propsButtonContainerStyles.default}
    );

    return (
        <View style={containerStyles}>
            <Image source={{uri:props.image}} style={imageStyles}/>
            <Text style={titleStyles}>
                {props.titleLabel}
            </Text>
            {props.description ?
                <Text style={descriptionStyles}>
                    {props.description}
                </Text>
                : null}
            <View style={buttonContainerStyles}>
                <AppifyButton
                    onPress={props.onPress}
                    label={props.buttonLabel}
                    buttonStyles={props.buttonButtonStyles}
                    textStyles={props.buttonTextStyles}
                    disabled={props.disabled}
                />
            </View>
        </View>
    );
};