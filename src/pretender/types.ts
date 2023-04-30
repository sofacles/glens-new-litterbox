export type ActionType = {
    type: string,
    cargo: any
}

export type screenDimensionsType = {
    height: number,
    width: number,
}

export type PointType = {
    x: number,
    y: number,
}

export type OffsetMountainDataType = {
    gameOffset: number,
    allPointsCorrected: PointType[],
    screenDimensions: screenDimensionsType,
    //shipOffset is really just here for the instrument panel?
    shipOffset: number;
}

export type ShipDataType = {
    offsetY: number,
    screenDimensions: { height: number, width: number}
}