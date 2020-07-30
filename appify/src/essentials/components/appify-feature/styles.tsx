import { StyleSheet } from "react-native";
import * as commonStyles from "../../common/styles";

export const defaultStyles = StyleSheet.create({
    // DEFAULT
    containerDefault: {
        padding: 32,
    },
    imageDefault: {

    },
    imageBoxDefault: {
        marginBottom: 32,
    },
    backgroundImageDefault: {

    },
    superTitleStyles: {
        ...commonStyles.captionStrong,
        marginBottom: 8,
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