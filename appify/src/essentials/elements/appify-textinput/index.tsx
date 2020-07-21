import React, { FunctionComponent, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { defaultStyles } from "./styles";

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

    inputStyles?: AppifyTextInputStateStyles | null;
    labelStyles?: AppifyTextInputLabelStateStyles | null;
};

const STATE_DEFAULT = 0,
      STATE_SELECTED = 1,
      STATE_DISABLED = 2;

const emptyStyles = {default:null, selected:null, disabled:null};

export const AppifyTextInput: FunctionComponent<AppifyTextInputProperties> = (props) => {
    var [state,setState] = useState(STATE_DEFAULT),
        [value,setValue] = useState(props.value || "");

    var propsInputStyles:AppifyTextInputStateStyles = props.inputStyles || emptyStyles;
    var propsLabelStyles:AppifyTextInputLabelStateStyles = props.labelStyles || emptyStyles;

    var inputStyles = (
        state === STATE_SELECTED ? {...defaultStyles.inputSelected, ...propsInputStyles.default, ...propsInputStyles.selected}
        : state === STATE_DISABLED ? {...defaultStyles.inputDisabled, ...propsInputStyles.default, ...propsInputStyles.disabled}
        : {...defaultStyles.inputDefault, ...propsInputStyles.default}
    );

    var labelStyles = (
        state === STATE_SELECTED ? {...defaultStyles.labelSelected, ...propsLabelStyles.default, ...propsLabelStyles.selected}
        : state === STATE_DISABLED ? {...defaultStyles.labelDisabled, ...propsLabelStyles.default, ...propsLabelStyles.disabled}
        : {...defaultStyles.labelDefault, ...propsLabelStyles.default}
    );

    inputStyles = Object.assign({},inputStyles);
    var {placeholderColor} = inputStyles;
    delete inputStyles.placeholderColor;

    return (
        <View>
            <Text style={labelStyles}>{props.label}</Text>
            {props.disabled ? (
                <TextInput
                    editable={false}
                    style={inputStyles as object}
                    value={value}
                />
            ) : (
                <TextInput
                    onChangeText={value => {
                        setValue(value);
                        props.onChange && props.onChange(value);
                    }}
                    style={inputStyles as object}
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