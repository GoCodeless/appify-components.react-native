import { StyleSheet } from "react-native";
import * as commonStyles from "../../common/styles";
import { vw, vh } from "../../utils/viewport-units";

export const defaultStyles = StyleSheet.create({
    // DEFAULT
    containerDefault: {
        width: "100%",
        minHeight: 100 * vh,
    },
    innerContainerDefault: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 32,
        paddingTop: 124,
        paddingBottom: 174,
    },
    imageDefault: {
        
    },
    titleDefault: {
        ...commonStyles.header2,
        color: "#FFFFFF",
        marginBottom: 8,
    },
    subtitleDefault: {
        ...commonStyles.subtitle,
        color: "#FFFFFF",
        marginBottom: 32,
    },

    // DISABLED
    containerDisabled: {
        width: "100%",
        minHeight: 100 * vh,
    },
    innerContainerDisabled: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 32,
        paddingTop: 124,
        paddingBottom: 174,
    },
    imageDisabled: {
        
    },
    titleDisabled: {
        ...commonStyles.header2,
        color: "#FFFFFF",
        marginBottom: 8,
    },
    subtitleDisabled: {
        ...commonStyles.subtitle,
        color: "#FFFFFF",
        marginBottom: 32,
    },
});