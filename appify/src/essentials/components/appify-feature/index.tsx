import React, { FunctionComponent, ReactNode, useState } from "react";
import { View, Text, Image, ImageBackground, ImageSourcePropType } from "react-native";
import { ConditionalWrapper } from "../../utils/conditionalwrapper";
import { AppifyButton, AppifyButtonStateStyles } from "../../elements/appify-button";
import { defaultStyles } from "./styles";
import { ImageBox } from "../../utils/imagebox";

export interface AppifyFeatureStateStyles {
    default?: object | null;
};

export interface AppifyFeatureProperties {
    onPress?: () => void;
    superTitleLabel?: string | ReactNode;
    titleLabel?: string | ReactNode;
    description?: string | ReactNode;
    buttonLabel?: string | ReactNode;
    image: ImageSourcePropType;
    backgroundImage?: ImageSourcePropType;
    disabled?: boolean;

    buttonButtonStyles?: AppifyButtonStateStyles | null;
    buttonTextStyles?: AppifyButtonStateStyles | null;
    containerStyles?: AppifyFeatureStateStyles | null;
    imageStyles?: AppifyFeatureStateStyles | null;
    imageBoxStyles?: AppifyFeatureStateStyles | null;
    backgroundImageStyles?: AppifyFeatureStateStyles | null;
    superTitleStyles?: AppifyFeatureStateStyles | null;
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
    var propsImageBoxStyles = props.imageBoxStyles || emptyStyles;
    var propsBackgroundImageStyles = props.backgroundImageStyles || emptyStyles;
    var propsSuperTitleStyles = props.superTitleStyles || emptyStyles;
    var propsTitleStyles = props.titleStyles || emptyStyles;
    var propsDescriptionStyles = props.descriptionStyles || emptyStyles;
    var propsButtonContainerStyles = props.buttonContainerStyles || emptyStyles;

    var containerStyles = (
        {...defaultStyles.containerDefault, ...propsContainerStyles.default}
    );

    var imageStyles = (
        {...defaultStyles.imageDefault, ...propsImageStyles.default}
    );

    var imageBoxStyles = (
        {...defaultStyles.imageBoxDefault, ...propsImageBoxStyles.default}
    );

    var backgroundImageStyles = (
        {...defaultStyles.backgroundImageDefault, ...propsBackgroundImageStyles.default}
    );

    var superTitleStyles = (
        {...defaultStyles.superTitleStyles, ...propsSuperTitleStyles.default}
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

    var truthy = (children:ReactNode) => (
        <ImageBackground style={containerStyles}
                imageStyle={backgroundImageStyles}
                source={props.backgroundImage as ImageSourcePropType}>
            {children}
        </ImageBackground>
    );

    var falsy = (children:ReactNode) => (
        <View style={containerStyles}>
            {children}
        </View>
    );

    return (
        <ConditionalWrapper condition={!!props.backgroundImage} truthy={truthy} falsy={falsy}>
            <>
                <ImageBox source={props.image} imageStyle={imageStyles} boxStyle={imageBoxStyles}/>
                {props.superTitleLabel != undefined ? 
                    <Text style={superTitleStyles}>
                        {props.superTitleLabel}
                    </Text>
                    : null}
                {props.titleLabel != undefined ?
                    <Text style={titleStyles}>
                        {props.titleLabel}
                    </Text>
                    : null}
                {props.description != undefined ?
                    <Text style={descriptionStyles}>
                        {props.description}
                    </Text>
                    : null}
                {props.buttonLabel != undefined ?
                    <View style={buttonContainerStyles}>
                        <AppifyButton
                            onPress={props.onPress}
                            label={props.buttonLabel}
                            buttonStyles={props.buttonButtonStyles}
                            textStyles={props.buttonTextStyles}
                            disabled={props.disabled}
                        />
                    </View>
                    : null}
            </>
        </ConditionalWrapper>
    );
};