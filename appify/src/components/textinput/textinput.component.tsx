import React, { FunctionComponent, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { defaultStyles } from "./textinput.styles";

export interface AppifyTextInputStateStyles {
    default?: ({placeholderColor?: string} & object) | null;
    selected?: ({placeholderColor?: string} & object) | null;
    disabled?: ({placeholderColor?: string} & object) | null;
};

export interface AppifyTextInputLabelStateStyles {
    default?: object | null;
    selected?: object | null;
    disabled?: object | null;
}

export interface AppifyTextInputProperties {
    onChange?: (value:string) => void;
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    label: string;

    inputStyle?: AppifyTextInputStateStyles | null;
    labelStyle?: AppifyTextInputLabelStateStyles | null;
};

const STATE_DEFAULT = 0,
      STATE_SELECTED = 1,
      STATE_DISABLED = 2;

const emptyStyles = {default:null, selected:null, disabled:null};

export const TextInputComponent: FunctionComponent<AppifyTextInputProperties> = (props) => {
    var [state,setState] = useState(STATE_DEFAULT),
        [value,setValue] = useState(props.value || "");

    var propsInputStyle:AppifyTextInputStateStyles = props.inputStyle || emptyStyles;
    var propsLabelStyle:AppifyTextInputLabelStateStyles = props.labelStyle || emptyStyles;

    var inputStyle = (
        state === STATE_SELECTED ? {...defaultStyles.inputSelected, ...propsInputStyle.selected}
        : state === STATE_DISABLED ? {...defaultStyles.inputDisabled, ...propsInputStyle.disabled}
        : {...defaultStyles.inputDefault, ...propsInputStyle.default}
    );

    var labelStyle = (
        state === STATE_SELECTED ? {...defaultStyles.labelSelected, ...propsLabelStyle.selected}
        : state === STATE_DISABLED ? {...defaultStyles.labelDisabled, ...propsLabelStyle.disabled}
        : {...defaultStyles.labelDefault, ...propsLabelStyle.default}
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