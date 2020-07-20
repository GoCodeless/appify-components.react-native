import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
    // DEFAULT
    textDefault: {
        fontSize: 12,
        lineHeight: 16,
        fontStyle: "normal",
        fontWeight: "bold",
        letterSpacing: 0.12,
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1,
        textTransform: "uppercase",
        color: "#050A16",
    },
    buttonDefault: {
        borderRadius: 2,
        width: 120,
        height: 40,
        backgroundColor: "#FAD549",
    },

    // PRESSED
    textPressed: {
        fontSize: 12,
        lineHeight: 16,
        fontStyle: "normal",
        fontWeight: "bold",
        letterSpacing: 0.12,
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1,
        textTransform: "uppercase",
        color: "#050A16",
    },
    buttonPressed: {
        borderRadius: 2,
        width: 120,
        height: 40,
        backgroundColor: "#FAD549",
    },

    // CANCELED
    textCanceled: {
        fontSize: 12,
        lineHeight: 16,
        fontStyle: "normal",
        fontWeight: "bold",
        letterSpacing: 0.12,
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1,
        textTransform: "uppercase",
        color: "#353A46",
    },
    buttonCanceled: {
        borderRadius: 2,
        width: 120,
        height: 40,
        backgroundColor: "#FEE56C",
    },

    // DISABLED
    textDisabled: {
        fontSize: 12,
        lineHeight: 16,
        fontStyle: "normal",
        fontWeight: "bold",
        letterSpacing: 0.12,
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1,
        textTransform: "uppercase",
        color: "#050A16",
    },
    buttonDisabled: {
        borderRadius: 2,
        width: 120,
        height: 40,
        backgroundColor: "#808080",
    },
});