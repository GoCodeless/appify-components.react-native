import React, { FunctionComponent, useState } from "react";
import { View, Text } from "react-native";
import { Pressable } from "../../utils/pressable";
import { defaultStyles } from "./button.styles";

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

    textStyle?: AppifyButtonStateStyles | null;
    buttonStyle?: AppifyButtonStateStyles | null;
};

const STATE_DEFAULT = 0,
      STATE_PRESSED = 1,
      STATE_CANCELED = 2,
      STATE_DISABLED = 3;

const emptyStyles = {default:null, pressed:null, canceled:null, disabled:null};

export const ButtonComponent: FunctionComponent<AppifyButtonProperties> = (props) => {
    var [state,setState] = useState(props.disabled ? STATE_DISABLED : STATE_DEFAULT);

    var propsButtonStyle:AppifyButtonStateStyles = props.buttonStyle || emptyStyles;
    var propsTextStyle:AppifyButtonStateStyles = props.textStyle || emptyStyles;

    var buttonStyle = (
        state === STATE_PRESSED ? {...defaultStyles.buttonPressed, ...propsButtonStyle.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.buttonCanceled, ...propsButtonStyle.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.buttonDisabled, ...propsButtonStyle.disabled}
        : {...defaultStyles.buttonDefault, ...propsButtonStyle.default}
    );

    var textStyle = (
        state === STATE_PRESSED ? {...defaultStyles.textPressed, ...propsTextStyle.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.textCanceled, ...propsTextStyle.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.textDisabled, ...propsTextStyle.disabled}
        : {...defaultStyles.textDefault, ...propsTextStyle.default}
    );

    return props.disabled ? (
        <Pressable>
            <View style={buttonStyle}>
                <Text style={textStyle}>
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
            <View style={buttonStyle}>
                <Text style={textStyle}>
                    {props.label}
                </Text>
            </View>
        </Pressable>
    );
}