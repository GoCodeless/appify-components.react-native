import React, { FunctionComponent, useState } from "react";
import { View, Text } from "react-native";
import { Pressable } from "../../utils/pressable";
import { defaultStyles } from "./button.styles";

export interface AppifyButtonStateStyles {
    default: object | null;
    pressed: object | null;
    canceled: object | null;
    disabled: object | null;
};

export interface AppifyButtonProperties {
    onPress?: () => void;
    disabled?: boolean;
    label: string;

    textStyle: AppifyButtonStateStyles;
    buttonStyle: AppifyButtonStateStyles;
};

const STATE_DEFAULT = 0,
      STATE_PRESSED = 1,
      STATE_CANCELED = 2,
      STATE_DISABLED = 3;

export const ButtonComponent: FunctionComponent<AppifyButtonProperties> = (props) => {
    var [state,setState] = useState(props.disabled ? STATE_DISABLED : STATE_DEFAULT);

    var buttonStyle = (
        state === STATE_PRESSED ? {...defaultStyles.buttonPressed, ...props.buttonStyle.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.buttonCanceled, ...props.buttonStyle.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.buttonDisabled, ...props.buttonStyle.disabled}
        : {...defaultStyles.buttonDefault, ...props.buttonStyle.default}
    );

    var textStyle = (
        state === STATE_PRESSED ? {...defaultStyles.textPressed, ...props.textStyle.pressed}
        : state === STATE_CANCELED ? {...defaultStyles.textCanceled, ...props.textStyle.canceled}
        : state === STATE_DISABLED ? {...defaultStyles.textDisabled, ...props.textStyle.disabled}
        : {...defaultStyles.textDefault, ...props.textStyle.default}
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