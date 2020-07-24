import React, { FunctionComponent, useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { defaultStyles } from "./styles";

export interface AppifyGridCellStateStyles {
    default?: object | null;
    pressed?: object | null;
    canceled?: object | null;
    disabled?: object | null;
};

export interface AppifyGridCellData {
    onPress?: () => void;
    image: string;
    title: string;
    description?: string;
    disabled?: boolean;
}

export interface AppifyGridCellProperties extends AppifyGridCellData {
    cellStyles?: AppifyGridCellStateStyles | null;
    cellImageStyles?: AppifyGridCellStateStyles | null;
    cellTitleStyles?: AppifyGridCellStateStyles | null;
    cellDescriptionStyles?: AppifyGridCellStateStyles | null;
};

const STATE_DEFAULT = 0,
      STATE_PRESSED = 1,
      STATE_CANCELED = 2,
      STATE_DISABLED = 3;

const emptyStyles = {default:null, pressed:null, canceled:null, disabled:null};
      
export const AppifyGridCell: FunctionComponent<AppifyGridCellProperties> = (props) => {
    var [state, setState] = useState(props.disabled ? STATE_DISABLED : STATE_DEFAULT);

    var propsCellStyles = props.cellStyles || emptyStyles;
    var propsCellImageStyles = props.cellImageStyles || emptyStyles;
    var propsCellTitleStyles = props.cellTitleStyles || emptyStyles;
    var propsCellDescriptionStyles = props.cellDescriptionStyles || emptyStyles;

    var cellStyles = (
        state === STATE_PRESSED ? {...defaultStyles.cellPressed, ...propsCellStyles.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.cellCanceled, ...propsCellStyles.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.cellDisabled, ...propsCellStyles.disabled}
        : {...defaultStyles.cellDefault, ...propsCellStyles.default}
    );

    var cellImageStyles = (
        state === STATE_PRESSED ? {...defaultStyles.cellImagePressed, ...propsCellImageStyles.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.cellImageCanceled, ...propsCellImageStyles.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.cellImageDisabled, ...propsCellImageStyles.disabled}
        : {...defaultStyles.cellImageDefault, ...propsCellImageStyles.default}
    );

    var cellTitleStyles = (
        state === STATE_PRESSED ? {...defaultStyles.cellTitlePressed, ...propsCellTitleStyles.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.cellTitleCanceled, ...propsCellTitleStyles.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.cellTitleDisabled, ...propsCellTitleStyles.disabled}
        : {...defaultStyles.cellTitleDefault, ...propsCellTitleStyles.default}
    );

    var cellDescriptionStyles = (
        state === STATE_PRESSED ? {...defaultStyles.cellDescriptionPressed, ...propsCellDescriptionStyles.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.cellDescriptionCanceled, ...propsCellDescriptionStyles.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.cellDescriptionDisabled, ...propsCellDescriptionStyles.disabled}
        : {...defaultStyles.cellDescriptionDefault, ...propsCellDescriptionStyles.default}
    );

    return (
        <TouchableWithoutFeedback
                onPress={() => props.disabled || props.onPress && props.onPress()}
                onPressIn={() => props.disabled || setState(STATE_PRESSED)}
                onPressOut={() => props.disabled || setState(STATE_DEFAULT)}
                onLongPress={() => props.disabled || setState(STATE_CANCELED)}
                >
            <View style={cellStyles}>
                <Image source={{uri:props.image}} style={cellImageStyles}/>
                <Text style={cellTitleStyles}>
                    {props.title}
                </Text>
                {props.description ?
                    <Text style={cellDescriptionStyles}>
                        {props.description}
                    </Text>
                    : null}
            </View>
        </TouchableWithoutFeedback>
    );
};