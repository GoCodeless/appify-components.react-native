import React, { FunctionComponent, useState } from "react";
import { View, Text } from "react-native";
import { Pressable } from "../../utils/pressable";
import { defaultStyles } from "./styles";

export interface AppifyButtonStateStyles {
    default?: object | null;
    pressed?: object | null;
    canceled?: object | null;
    disabled?: object | null;
};

export interface AppifyButtonProperties {
    onPress?: () => void;
    disabled?: boolean;
    label: string;

    textStyles?: AppifyButtonStateStyles | null;
    buttonStyles?: AppifyButtonStateStyles | null;
};

const STATE_DEFAULT = 0,
      STATE_PRESSED = 1,
      STATE_CANCELED = 2,
      STATE_DISABLED = 3;

const emptyStyles = {default:null, pressed:null, canceled:null, disabled:null};

export const AppifyButton: FunctionComponent<AppifyButtonProperties> = (props) => {
    var [state,setState] = useState(props.disabled ? STATE_DISABLED : STATE_DEFAULT);

    var propsButtonStyles:AppifyButtonStateStyles = props.buttonStyles || emptyStyles;
    var propsTextStyles:AppifyButtonStateStyles = props.textStyles || emptyStyles;

    var buttonStyles = (
        state === STATE_PRESSED ? {...defaultStyles.buttonPressed, ...propsButtonStyles.default, ...propsButtonStyles.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.buttonCanceled, ...propsButtonStyles.default, ...propsButtonStyles.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.buttonDisabled, ...propsButtonStyles.default, ...propsButtonStyles.disabled}
        : {...defaultStyles.buttonDefault, ...propsButtonStyles.default}
    );

    var textStyles = (
        state === STATE_PRESSED ? {...defaultStyles.textPressed, ...propsTextStyles.default, ...propsTextStyles.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.textCanceled, ...propsTextStyles.default, ...propsTextStyles.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.textDisabled, ...propsTextStyles.default, ...propsTextStyles.disabled}
        : {...defaultStyles.textDefault, ...propsTextStyles.default}
    );

    return props.disabled ? (
        <Pressable>
            <View style={buttonStyles}>
                <Text style={textStyles}>
                    {props.label}
                </Text>
            </View>
        </Pressable>
    ) : (
        <Pressable onPress={props.onPress}
                   onPressIn={() => setState(STATE_PRESSED)}
                   onPressOut={() => setState(STATE_DEFAULT)}
                   onLongPress={() => setState(STATE_CANCELED)}
            >
            <View style={buttonStyles}>
                <Text style={textStyles}>
                    {props.label}
                </Text>
            </View>
        </Pressable>
    );
}