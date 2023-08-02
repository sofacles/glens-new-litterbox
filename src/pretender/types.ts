export type ActionType = {
  type: string;
  cargo: any;
};

export type screenDimensionsType = {
  height: number;
  width: number;
};

export type PointType = {
  x: number;
  y: number;
};

export type OffsetMountainDataType = {
  gameOffset: number;
  allPointsCorrected: PointType[];
  screenDimensions: screenDimensionsType;
  //shipOffset is really just here for the instrument panel?
  shipOffset: number;
};

export type ShipDataType = {
  offsetY: number;
  screenDimensions: { height: number; width: number };
};

export type UP_DOWN_NEITHER_type = "UP" | "DOWN" | "NEITHER";

export type UseMultipleKeysPropsType = {
  goHandler: () => {};
  resetAnimationHandler: () => {};
  stopHandler: () => {};
  changeShipYHandler: (upDownNeither: UP_DOWN_NEITHER_type) => {};
  changeDirectionHandler: () => {};
};

export type KeyBindingType = {
  mappedKey: string;
  name: string;
};
