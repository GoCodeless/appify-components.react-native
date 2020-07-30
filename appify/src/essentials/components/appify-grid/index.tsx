import React, { FunctionComponent, useState, ReactNode } from "react";
import { View, Text } from "react-native";
import { defaultStyles } from "./styles";
import { AppifyGridCell, AppifyGridCellData, AppifyGridCellStateStyles } from "./gridcell";
import { AppifyButtonStateStyles } from "../../elements/appify-button";

export interface AppifyGridStateStyles {
    default?: object | null;
};

export interface AppifyGridProperties {
    titleLabel?: string | ReactNode;
    subtitleLabel?: string | ReactNode;
    gridCells: AppifyGridCellData[];
    cellsPerRow?: number;
    disabled?: boolean;

    containerStyles?: AppifyGridStateStyles | null;
    titleContainerStyles?: AppifyGridStateStyles | null;
    gridContainerStyles?: AppifyGridStateStyles | null;
    gridRowStyles?: AppifyGridStateStyles | null;
    titleStyles?: AppifyGridStateStyles | null;
    subtitleStyles?: AppifyGridStateStyles | null;

    cellStyles?: AppifyGridCellStateStyles | null;
    cellImageStyles?: AppifyGridCellStateStyles | null;
    cellImageBoxStyles?: AppifyGridCellStateStyles | null;
    cellTitleStyles?: AppifyGridCellStateStyles | null;
    cellDescriptionStyles?: AppifyGridCellStateStyles | null;
    cellButtonContainerStyles?: AppifyGridCellStateStyles | null;
    cellButtonButtonStyles?: AppifyButtonStateStyles | null;
    cellButtonTextStyles?: AppifyButtonStateStyles | null;
};

const STATE_DEFAULT = 0;

const emptyStyles = {default:null};
const emptyCell = {};

export const AppifyGrid: FunctionComponent<AppifyGridProperties> = (props) => {
    var state = STATE_DEFAULT;

    var propsContainerStyles = props.containerStyles || emptyStyles;
    var propsTitleContainerStyles = props.titleContainerStyles || emptyStyles;
    var propsGridContainerStyles = props.gridContainerStyles || emptyStyles;
    var propsGridRowStyles = props.gridRowStyles || emptyStyles;
    var propsTitleStyles = props.titleStyles || emptyStyles;
    var propsSubtitleStyles = props.subtitleStyles || emptyStyles;

    var cellsPerRow = props.cellsPerRow || 2;

    var containerStyles = (
        {...defaultStyles.containerDefault, ...propsContainerStyles.default}
    );

    var titleContainerStyles = (
        {...defaultStyles.titleContainerDefault, ...propsTitleContainerStyles.default}
    );

    var gridContainerStyles = (
        {...defaultStyles.gridContainerDefault, ...propsGridContainerStyles.default}
    );

    var gridRowStyles = (
        {...defaultStyles.gridRowDefault, ...propsGridRowStyles.default}
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
            if(i % cellsPerRow === 0)
                arr.push([cell]);
            else
                arr[arr.length-1].push(cell);
            return arr;
        },
        []
    );

    if(gridRows.length) {
        let lastRow = gridRows[gridRows.length-1];
        for(let i=lastRow.length; i<cellsPerRow; i++)
            lastRow.push(emptyCell);
    }

    return (
        <View style={containerStyles}>
            <View style={titleContainerStyles}>
                {props.titleLabel != undefined ?
                    <Text style={titleStyles}>
                        {props.titleLabel}
                    </Text>
                    : null}
                {props.subtitleLabel != undefined ?
                    <Text style={subtitleStyles}>
                        {props.subtitleLabel}
                    </Text>
                    : null}
            </View>
            <View style={gridContainerStyles}>
                {gridRows.map((row,i) => (
                    <View key={i} style={gridRowStyles}>
                        {row.map((cellProps,j) => (
                            <AppifyGridCell {...cellProps}
                                key={j}
                                disabled={props.disabled || cellProps.disabled}
                                cellStyles={props.cellStyles}
                                cellImageStyles={props.cellImageStyles}
                                cellImageBoxStyles={props.cellImageBoxStyles}
                                cellTitleStyles={props.cellTitleStyles}
                                cellDescriptionStyles={props.cellDescriptionStyles}
                                cellButtonContainerStyles={props.cellButtonContainerStyles}
                                cellButtonButtonStyles={props.cellButtonButtonStyles}
                                cellButtonTextStyles={props.cellButtonTextStyles}
                            />
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
};