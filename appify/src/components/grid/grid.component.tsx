import React, { FunctionComponent, useState } from "react";
import { View, Text, Image } from "react-native";
import { defaultStyles } from "./grid.styles";

export interface AppifyGridStateStyles {
    default?: object | null;
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

    containerStyles?: AppifyGridStateStyles | null;
    titleStyles?: AppifyGridStateStyles | null;
    subtitleStyles?: AppifyGridStateStyles | null;
    cellStyles?: AppifyGridStateStyles | null;
    cellImageStyles?: AppifyGridStateStyles | null;
    cellTitleStyles?: AppifyGridStateStyles | null;
    cellDescriptionStyles?: AppifyGridStateStyles | null;
};

const STATE_DEFAULT = 0;

const emptyStyles = {default:null};

export const GridComponent: FunctionComponent<AppifyGridProperties> = (props) => {
    var state = STATE_DEFAULT;

    var propsContainerStyles = props.containerStyles || emptyStyles;
    var propsTitleStyles = props.titleStyles || emptyStyles;
    var propsSubtitleStyles = props.subtitleStyles || emptyStyles;
    var propsCellStyles = props.cellStyles || emptyStyles;
    var propsCellImageStyles = props.cellImageStyles || emptyStyles;
    var propsCellTitleStyles = props.cellTitleStyles || emptyStyles;
    var propsCellDescriptionStyles = props.cellDescriptionStyles || emptyStyles;

    var containerStyles = (
        {...defaultStyles.containerDefault, ...propsContainerStyles.default}
    );

    var titleStyles = (
        {...defaultStyles.titleDefault, ...propsTitleStyles.default}
    );

    var subtitleStyles = (
        {...defaultStyles.subtitleDefault, ...propsSubtitleStyles.default}
    );

    var cellStyles = (
        {...defaultStyles.cellDefault, ...propsCellStyles.default}
    );

    var cellImageStyles = (
        {...defaultStyles.cellImageDefault, ...propsCellImageStyles.default}
    );

    var cellTitleStyles = (
        {...defaultStyles.cellTitleDefault, ...propsCellTitleStyles.default}
    );

    var cellDescriptionStyles = (
        {...defaultStyles.cellDescriptionDefault, ...propsCellDescriptionStyles.default}
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