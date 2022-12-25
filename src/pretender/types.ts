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
}

