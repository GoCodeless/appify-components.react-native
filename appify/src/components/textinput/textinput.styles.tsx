import { StyleSheet } from "react-native";

export const defaultBaseStyles = StyleSheet.create({
    // DEFAULT
    inputDefault: {

    },
    labelDefault: {

    },

    // SELECTED
    inputSelected: {

    },
    labelSelected: {

    },

    // DISABLED
    inputDisabled: {
        
    },
    labelDisabled: {

    },
});

export const defaultStyles = {
    // DEFAULT
    inputDefault: {
        ...defaultBaseStyles.inputDefault,
        placeholderColor: "",
    },
    labelDefault: defaultBaseStyles.labelDefault,

    // SELECTED
    inputSelected: {
        ...defaultBaseStyles.inputSelected,
        placeholderColor: "",
    },
    labelSelected: defaultBaseStyles.labelSelected,

    // DISABLED
    inputDisabled: {
        ...defaultBaseStyles.inputDisabled,
        placeholderColor: "",
    },
    labelDisabled: defaultBaseStyles.labelDisabled,
};