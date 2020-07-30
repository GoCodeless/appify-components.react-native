import React, { FunctionComponent, useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback, ImageSourcePropType } from "react-native";
import { AppifyButton, AppifyButtonStateStyles } from "../../elements/appify-button";
import getSize from "../../utils/imagesize";
import { defaultStyles } from "./styles";

export interface AppifyGridCellStateStyles {
    default?: object | null;
    pressed?: object | null;
    canceled?: object | null;
    disabled?: object | null;
};

export interface AppifyGridCellData {
    onPress?: () => void;
    image?: ImageSourcePropType;
    title?: string;
    description?: string;
    buttonLabel?: string;
    disabled?: boolean;
}

export interface AppifyGridCellProperties extends AppifyGridCellData {
    cellStyles?: AppifyGridCellStateStyles | null;
    cellImageStyles?: AppifyGridCellStateStyles | null;
    cellTitleStyles?: AppifyGridCellStateStyles | null;
    cellDescriptionStyles?: AppifyGridCellStateStyles | null;
    cellButtonContainerStyles?: AppifyGridCellStateStyles | null;
    cellButtonButtonStyles?: AppifyButtonStateStyles | null;
    cellButtonTextStyles?: AppifyButtonStateStyles | null;
};

const STATE_DEFAULT = 0,
      STATE_PRESSED = 1,
      STATE_CANCELED = 2,
      STATE_DISABLED = 3;

const emptyStyles = {default:null, pressed:null, canceled:null, disabled:null};
      
export const AppifyGridCell: FunctionComponent<AppifyGridCellProperties> = (props) => {
    var [state, setState] = useState(props.disabled ? STATE_DISABLED : STATE_DEFAULT);
    var [aspect, setAspect] = useState(1);

    if(props.image) {
        getSize(props.image).then((sz)=>{
            setAspect(sz.width / sz.height);
        });
    }

    var propsCellStyles = props.cellStyles || emptyStyles;
    var propsCellImageStyles = props.cellImageStyles || emptyStyles;
    var propsCellTitleStyles = props.cellTitleStyles || emptyStyles;
    var propsCellDescriptionStyles = props.cellDescriptionStyles || emptyStyles;
    var propsCellButtonContainerStyles = props.cellButtonContainerStyles || emptyStyles;

    var cellStyles = (
        state === STATE_PRESSED ? {...defaultStyles.cellPressed, ...propsCellStyles.default, ...propsCellStyles.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.cellCanceled, ...propsCellStyles.default, ...propsCellStyles.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.cellDisabled, ...propsCellStyles.default, ...propsCellStyles.disabled}
        : {...defaultStyles.cellDefault, ...propsCellStyles.default}
    );

    var cellImageStyles = (
        state === STATE_PRESSED ? {...defaultStyles.cellImagePressed, ...propsCellImageStyles.default, ...propsCellImageStyles.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.cellImageCanceled, ...propsCellImageStyles.default, ...propsCellImageStyles.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.cellImageDisabled, ...propsCellImageStyles.default, ...propsCellImageStyles.disabled}
        : {...defaultStyles.cellImageDefault, ...propsCellImageStyles.default}
    );

    if(cellImageStyles.aspectRatio === -1) {
        cellImageStyles.aspectRatio = aspect;
    }

    var cellTitleStyles = (
        state === STATE_PRESSED ? {...defaultStyles.cellTitlePressed, ...propsCellTitleStyles.default, ...propsCellTitleStyles.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.cellTitleCanceled, ...propsCellTitleStyles.default, ...propsCellTitleStyles.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.cellTitleDisabled, ...propsCellTitleStyles.default, ...propsCellTitleStyles.disabled}
        : {...defaultStyles.cellTitleDefault, ...propsCellTitleStyles.default}
    );

    var cellDescriptionStyles = (
        state === STATE_PRESSED ? {...defaultStyles.cellDescriptionPressed, ...propsCellDescriptionStyles.default, ...propsCellDescriptionStyles.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.cellDescriptionCanceled, ...propsCellDescriptionStyles.default, ...propsCellDescriptionStyles.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.cellDescriptionDisabled, ...propsCellDescriptionStyles.default, ...propsCellDescriptionStyles.disabled}
        : {...defaultStyles.cellDescriptionDefault, ...propsCellDescriptionStyles.default}
    );

    var buttonContainerStyles = (
        state === STATE_PRESSED ? {...defaultStyles.cellButtonContainerPressed, ...propsCellButtonContainerStyles.default, ...propsCellButtonContainerStyles.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.cellButtonContainerCanceled, ...propsCellButtonContainerStyles.default, ...propsCellButtonContainerStyles.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.cellButtonContainerDisabled, ...propsCellButtonContainerStyles.default, ...propsCellButtonContainerStyles.disabled}
        : {...defaultStyles.cellButtonContainerDefault, ...propsCellButtonContainerStyles.default}
    );

    return (
        <TouchableWithoutFeedback
                onPress={() => props.disabled || props.onPress && props.onPress()}
                onPressIn={() => props.disabled || setState(STATE_PRESSED)}
                onPressOut={() => props.disabled || setState(STATE_DEFAULT)}
                onLongPress={() => props.disabled || setState(STATE_CANCELED)}
                >
            <View style={cellStyles}>
                {props.image ?
                    <Image source={props.image} style={cellImageStyles}/>
                    : null}
                {typeof props.title === 'string' ? 
                    <Text style={cellTitleStyles}>
                        {props.title}
                    </Text>
                    : null}
                {typeof props.description === 'string' ?
                    <Text style={cellDescriptionStyles}>
                        {props.description}
                    </Text>
                    : null}
                {typeof props.buttonLabel === 'string' ?
                    <View style={buttonContainerStyles}>
                        <AppifyButton
                            label={props.buttonLabel}
                            buttonStyles={props.cellButtonButtonStyles}
                            textStyles={props.cellButtonTextStyles}
                            onPress={props.onPress}
                            disabled={props.disabled}
                        />
                    </View>
                    : null}
            </View>
        </TouchableWithoutFeedback>
    );
};