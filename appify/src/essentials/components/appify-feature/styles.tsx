import { StyleSheet } from "react-native";
import * as commonStyles from "../../common/styles";

export const defaultStyles = StyleSheet.create({
    // DEFAULT
    containerDefault: {
        padding: 32,
    },
    imageDefault: {
        width: "100%",
        aspectRatio: 1,
        marginBottom: 32,
    },
    titleDefault: {
        ...commonStyles.header4,
    },
    descriptionDefault: {
        ...commonStyles.caption,
        marginTop: 8,
    },
    buttonContainerDefault: {
        marginTop: 16,
    },
});