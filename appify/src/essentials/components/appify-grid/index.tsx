import React, { FunctionComponent, useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { defaultStyles } from "./styles";
import { AppifyGridCell, AppifyGridCellData, AppifyGridCellStateStyles } from "./gridcell";

export interface AppifyGridStateStyles {
    default?: object | null;
};

export interface AppifyGridProperties {
    titleLabel: string;
    subtitleLabel?: string;
    gridCells: AppifyGridCellData[];
    disabled?: boolean;

    containerStyles?: AppifyGridStateStyles | null;
    titleContainerStyles?: AppifyGridStateStyles | null;
    cellContainerStyles?: AppifyGridStateStyles | null;
    cellRowStyles?: AppifyGridStateStyles | null;
    titleStyles?: AppifyGridStateStyles | null;
    subtitleStyles?: AppifyGridStateStyles | null;

    cellStyles?: AppifyGridCellStateStyles | null;
    cellImageStyles?: AppifyGridCellStateStyles | null;
    cellTitleStyles?: AppifyGridCellStateStyles | null;
    cellDescriptionStyles?: AppifyGridCellStateStyles | null;
};

const STATE_DEFAULT = 0;

const emptyStyles = {default:null};

export const AppifyGrid: FunctionComponent<AppifyGridProperties> = (props) => {
    var state = STATE_DEFAULT;

    var propsContainerStyles = props.containerStyles || emptyStyles;
    var propsTitleContainerStyles = props.titleContainerStyles || emptyStyles;
    var propsCellContainerStyles = props.cellContainerStyles || emptyStyles;
    var propsCellRowStyles = props.cellRowStyles || emptyStyles;
    var propsTitleStyles = props.titleStyles || emptyStyles;
    var propsSubtitleStyles = props.subtitleStyles || emptyStyles;

    var containerStyles = (
        {...defaultStyles.containerDefault, ...propsContainerStyles.default}
    );

    var titleContainerStyles = (
        {...defaultStyles.titleContainerDefault, ...propsTitleContainerStyles.default}
    );

    var cellContainerStyles = (
        {...defaultStyles.cellContainerDefault, ...propsCellContainerStyles.default}
    );

    var cellRowStyles = (
        {...defaultStyles.cellRowDefault, ...propsCellRowStyles.default}
    );

    var titleStyles = (
        {...defaultStyles.titleDefault, ...propsTitleStyles.default}
    );

    var subtitleStyles = (
        {...defaultStyles.subtitleDefault, ...propsSubtitleStyles.default}
    );

    // join cells into row-pairs
    var gridRows = props.gridCells.reduce<AppifyGridCellData[][]>(
        (arr,cell,i) => {
            if(i%2 === 0)
                arr.push([cell]);
            else
                arr[arr.length-1].push(cell);
            return arr;
        },
        []
    );

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
                {gridRows.map((row,i) => (
                    <View key={i} style={cellRowStyles}>
                        {row.map((cellProps,j) => (
                            <AppifyGridCell {...cellProps}
                                key={j}
                                disabled={props.disabled || cellProps.disabled}
                                cellStyles={props.cellStyles}
                                cellImageStyles={props.cellImageStyles}
                                cellTitleStyles={props.cellTitleStyles}
                                cellDescriptionStyles={props.cellDescriptionStyles}
                            />
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
};