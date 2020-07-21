import React, { FunctionComponent } from "react";
import { TouchableWithoutFeedback } from "react-native";

// Polyfill Pressable since Expo supports up to React 0.61, but Pressable was introduced in 0.63

export interface PressableProperties {
    onPressIn?: () => void;
    onPressOut?: () => void;
    onPress?: () => void;
    onLongPress?: () => void;
};

export const Pressable: FunctionComponent<PressableProperties> = (props) => {
    return (
        <TouchableWithoutFeedback {...props}>
            {props.children}
        </TouchableWithoutFeedback>
    );
};