import { StyleSheet } from "react-native";
import * as commonStyles from "../../common/styles";

export const defaultStyles = StyleSheet.create({
    // grid styles
    // DEFAULT
    containerDefault: {
        width: "100%",
    },
    titleContainerDefault: {
        width: "100%",
        padding: 32,
        paddingBottom: 43,
    },
    cellContainerDefault: {
        width: "100%",
        paddingHorizontal: 32,
        paddingBottom: 3,
    },
    cellRowDefault: {
        marginLeft: -16,
        justifyContent: "space-evenly",
        flexDirection: "row",
    },
    titleDefault: {
        ...commonStyles.header3,
        textAlign: "center",
    },
    subtitleDefault: {
        ...commonStyles.subtitle,
        textAlign: "center",
    },

    // cell styles
    // DEFAULT
    cellDefault: {
        marginBottom: 32,
        marginLeft: 16,
        flex: 1,
    },
    cellImageDefault: {
        width: "100%",
        aspectRatio: 1,
        marginBottom: 8,
    },
    cellTitleDefault: {
        ...commonStyles.header6,
    },
    cellDescriptionDefault: {
        ...commonStyles.caption,
        marginTop: 8,
    },

    // PRESSED
    cellPressed: {
        marginBottom: 32,
        marginLeft: 16,
        flex: 1,
    },
    cellImagePressed: {
        width: "100%",
        aspectRatio: 1,
        marginBottom: 8,
    },
    cellTitlePressed: {
        ...commonStyles.header6,
    },
    cellDescriptionPressed: {
        ...commonStyles.caption,
        marginTop: 8,
    },

    // CANCELED
    cellCanceled: {
        marginBottom: 32,
        marginLeft: 16,
        flex: 1,
    },
    cellImageCanceled: {
        width: "100%",
        aspectRatio: 1,
        marginBottom: 8,
    },
    cellTitleCanceled: {
        ...commonStyles.header6,
    },
    cellDescriptionCanceled: {
        ...commonStyles.caption,
        marginTop: 8,
    },

    // DISABLED
    cellDisabled: {
        marginBottom: 32,
        marginLeft: 16,
        flex: 1,
    },
    cellImageDisabled: {
        width: "100%",
        aspectRatio: 1,
        marginBottom: 8,
    },
    cellTitleDisabled: {
        ...commonStyles.header6,
    },
    cellDescriptionDisabled: {
        ...commonStyles.caption,
        marginTop: 8,
    },
});