import { StyleSheet } from "react-native";
import * as commonStyles from "../../common/styles";

export const defaultStyles = StyleSheet.create({
    // DEFAULT
    containerDefault: {
        width: "100%",
    },
    innerContainerDefault: {
        paddingHorizontal: 40,
        paddingTop: 124,
        paddingBottom: 174,
    },
    imageDefault: {
        
    },
    titleDefault: {
        ...commonStyles.header2,
        color: "#FFFFFF",
        textAlign: "center",
    },
    subtitleDefault: {
        ...commonStyles.subtitle,
        textAlign: "center",
        color: "#FFFFFF",
        marginTop: 8,
    },
    buttonContainerDefault: {
        marginTop: 32,
        width: "100%",
        alignItems: "center",
    },
});