import React, { FunctionComponent, useState } from "react";
import { View, Text } from "react-native";
import { Pressable } from "../../utils/pressable";

export interface AppifyButtonStateStyles {
    default: object;
    pressed: object;
    canceled: object;
    disabled: object;
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
        state === STATE_PRESSED ? props.buttonStyle.pressed
        : state === STATE_CANCELED ? props.buttonStyle.canceled
        : state === STATE_DISABLED ? props.buttonStyle.disabled
        : props.buttonStyle.default
    );

    var textStyle = (
        state === STATE_PRESSED ? props.textStyle.pressed
        : state === STATE_CANCELED ? props.textStyle.canceled
        : state === STATE_DISABLED ? props.textStyle.disabled
        : props.textStyle.default
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