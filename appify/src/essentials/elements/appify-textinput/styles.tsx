import { StyleSheet } from "react-native";
import * as commonStyles from "../../common/styles";

export const defaultBaseStyles = StyleSheet.create({
    // DEFAULT
    inputDefault: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#BEC2C9",
        borderRadius: 4,
        width: 288,
        height: 40,
        paddingHorizontal: 16,
        paddingVertical: 10,
        color: "#373B42",
    },
    labelDefault: {
        ...commonStyles.captionStrong,
        letterSpacing: 0.12,
        textTransform: "uppercase",
        color: "#373B42",
        marginBottom: 7,
    },

    // SELECTED
    inputSelected: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#3040C4",
        borderRadius: 4,
        width: 288,
        height: 40,
        paddingHorizontal: 16,
        paddingVertical: 10,
        color: "#373B42",
    },
    labelSelected: {
        ...commonStyles.captionStrong,
        letterSpacing: 0.12,
        textTransform: "uppercase",
        color: "#373B42",
        marginBottom: 7,
    },

    // DISABLED
    inputDisabled: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#BEC2C9",
        borderRadius: 4,
        width: 288,
        height: 40,
        paddingHorizontal: 16,
        paddingVertical: 10,
        color: "#FF0000",
    },
    labelDisabled: {
        ...commonStyles.captionStrong,
        letterSpacing: 0.12,
        textTransform: "uppercase",
        color: "#373B42",
        marginBottom: 7,
    },
});

export const defaultStyles = {
    // DEFAULT
    inputDefault: {
        ...defaultBaseStyles.inputDefault,
        placeholderColor: "#BEC2C9",
    },
    labelDefault: defaultBaseStyles.labelDefault,

    // SELECTED
    inputSelected: {
        ...defaultBaseStyles.inputSelected,
        placeholderColor: "#BEC2C9",
    },
    labelSelected: defaultBaseStyles.labelSelected,

    // DISABLED
    inputDisabled: {
        ...defaultBaseStyles.inputDisabled,
        placeholderColor: "#BEC2C9",
    },
    labelDisabled: defaultBaseStyles.labelDisabled,
};