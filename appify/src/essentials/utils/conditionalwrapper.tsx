import { FunctionComponent, ReactNode, ReactElement } from "react";

export interface ConditionalWrapperParameters {
    condition: boolean;
    truthy?: ((children:ReactNode) => ReactNode) | null;
    falsy?: ((children:ReactNode) => ReactNode) | null;
};

export const ConditionalWrapper: FunctionComponent<ConditionalWrapperParameters> = (props) => {
    return (
            props.condition
            ? (props.truthy ? props.truthy(props.children) : props.children)
            : (props.falsy ? props.falsy(props.children) : props.children)
        ) as ReactElement;
};