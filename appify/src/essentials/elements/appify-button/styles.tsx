import { StyleSheet } from "react-native";
import { Colors } from "../../common/colors";

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
        color: Colors.white,
    },
    buttonDefault: {
        borderRadius: 2,
        width: 120,
        height: 40,
        backgroundColor: Colors.primary,
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
        color: Colors.white,
    },
    buttonPressed: {
        borderRadius: 2,
        width: 120,
        height: 40,
        backgroundColor: Colors.primary,
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
        color: Colors.white,
    },
    buttonCanceled: {
        borderRadius: 2,
        width: 120,
        height: 40,
        backgroundColor: Colors.primary,
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
        color: Colors.white,
    },
    buttonDisabled: {
        borderRadius: 2,
        width: 120,
        height: 40,
        backgroundColor: Colors.primary,
    },
});