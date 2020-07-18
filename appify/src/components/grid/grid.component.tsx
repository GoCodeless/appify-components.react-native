import React, { FunctionComponent, useState } from "react";
import { View, Text, Image } from "react-native";
import { defaultStyles } from "./grid.styles";

export interface AppifyGridStateStyles {
    default: object | null;
};

export interface AppifyGridCell {
    image: string;
    title: string;
    description: string;
};

export interface AppifyGridProperties {
    titleLabel: string;
    subtitleLabel?: string;
    gridCells: AppifyGridCell[];

    containerStyles: AppifyGridStateStyles;
    titleStyles: AppifyGridStateStyles;
    subtitleStyles: AppifyGridStateStyles;
    cellStyles: AppifyGridStateStyles;
    cellImageStyles: AppifyGridStateStyles;
    cellTitleStyles: AppifyGridStateStyles;
    cellDescriptionStyles: AppifyGridStateStyles;
};

const STATE_DEFAULT = 0;

export const GridComponent: FunctionComponent<AppifyGridProperties> = (props) => {
    var state = STATE_DEFAULT;

    var containerStyles = (
        {...defaultStyles.containerDefault, ...props.containerStyles.default}
    );

    var titleStyles = (
        {...defaultStyles.titleDefault, ...props.titleStyles.default}
    );

    var subtitleStyles = (
        {...defaultStyles.subtitleDefault, ...props.subtitleStyles.default}
    );

    var cellStyles = (
        {...defaultStyles.cellDefault, ...props.cellStyles.default}
    );

    var cellImageStyles = (
        {...defaultStyles.cellImageDefault, ...props.cellImageStyles.default}
    );

    var cellTitleStyles = (
        {...defaultStyles.cellTitleDefault, ...props.cellTitleStyles.default}
    );

    var cellDescriptionStyles = (
        {...defaultStyles.cellDescriptionDefault, ...props.cellDescriptionStyles.default}
    );

    var titleContainerStyles = defaultStyles.titleContainer;
    var cellContainerStyles = defaultStyles.cellContainer;
    
    return (
        <View style={containerStyles}>
            <View style={titleContainerStyles}>
                <Text style={titleStyles}>
                    {props.titleLabel}
                </Text>
                {props.subtitleLabel ?
                    <Text style={subtitleStyles}>
                        {props.subtitleLabel}
                    </Text>
                    : null}
            </View>
            <View style={cellContainerStyles}>
                {props.gridCells.map(({image,title,description}) => (
                    <View style={cellStyles}>
                        <Image source={{uri:image}}/>
                        <Text style={cellTitleStyles}>
                            {title}
                        </Text>
                        (description ?
                            <Text style={cellDescriptionStyles}>
                                {description}
                            </Text>
                            : null)
                    </View>
                ))}
            </View>
        </View>
    );
};