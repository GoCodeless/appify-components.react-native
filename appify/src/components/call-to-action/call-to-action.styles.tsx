import { StyleSheet } from "react-native";
import * as commonStyles from "../common/common.styles";

export const defaultStyles = StyleSheet.create({
    // DEFAULT
    containerDefault: {
        width: "100%",
    },
    innerContainerDefault: {
        paddingHorizontal: 40,
        paddingTop: 124,
        paddingBottom: 174,
        backgroundColor: "#404040a0",
    },
    imageDefault: {
        
    },
    titleDefault: {
        ...commonStyles.header2,
        color: "#FFFFFF",
    },
    subtitleDefault: {
        ...commonStyles.subtitle,
        color: "#FFFFFF",
    },

    // DISABLED
    containerDisabled: {
        width: "100%",
    },
    innerContainerDisabled: {
        paddingHorizontal: 40,
        paddingTop: 124,
        paddingBottom: 174,
        backgroundColor: "#404040a0",
    },
    imageDisabled: {

    },
    titleDisabled: {
        ...commonStyles.header2,
        color: "#FFFFFF",
    },
    subtitleDisabled: {
        ...commonStyles.subtitle,
        color: "#FFFFFF",
    },
});