import React, { FunctionComponent, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { defaultStyles } from "./textinput.styles";

export interface AppifyTextInputStateStyles {
    default: ({placeholderColor?: string} & object) | null;
    selected: ({placeholderColor?: string} & object) | null;
    disabled: ({placeholderColor?: string} & object) | null;
};

export interface AppifyTextInputLabelStateStyles {
    default: object | null;
    selected: object | null;
    disabled: object | null;
}

export interface AppifyTextInputProperties {
    onChange?: (value:string) => void;
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    label: string;

    inputStyle: AppifyTextInputStateStyles;
    labelStyle: AppifyTextInputLabelStateStyles;
};

const STATE_DEFAULT = 0,
      STATE_SELECTED = 1,
      STATE_DISABLED = 2;

export const TextInputComponent: FunctionComponent<AppifyTextInputProperties> = (props) => {
    var [state,setState] = useState(STATE_DEFAULT),
        [value,setValue] = useState(props.value || "");

    var inputStyle = (
        state === STATE_SELECTED ? {...defaultStyles.inputSelected, ...props.inputStyle.selected}
        : state === STATE_DISABLED ? {...defaultStyles.inputDisabled, ...props.inputStyle.disabled}
        : {...defaultStyles.inputDefault, ...props.inputStyle.default}
    );

    var labelStyle = (
        state === STATE_SELECTED ? {...defaultStyles.labelSelected, ...props.labelStyle.selected}
        : state === STATE_DISABLED ? {...defaultStyles.labelDisabled, ...props.labelStyle.disabled}
        : {...defaultStyles.labelDefault, ...props.labelStyle.default}
    );

    inputStyle = Object.assign({},inputStyle);
    var {placeholderColor} = inputStyle;
    delete inputStyle.placeholderColor;

    return (
        <View>
            <Text style={labelStyle}>{props.label}</Text>
            {props.disabled ? (
                <TextInput
                    editable={false}
                    style={inputStyle as object}
                    value={value}
                />
            ) : (
                <TextInput
                    onChangeText={value => {
                        setValue(value);
                        props.onChange && props.onChange(value);
                    }}
                    style={inputStyle as object}
                    onFocus={() => setState(STATE_SELECTED)}
                    onBlur={() => setState(STATE_DEFAULT)}
                    placeholder={props.placeholder}
                    placeholderTextColor={placeholderColor}
                    value={value}
                />
            )}
        </View>
    );
};