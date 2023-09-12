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

export type BulletPropsType = {
  direction: DirectionType;
  location: PointType;
  isVisible: boolean;
  tStart: number;
  lastTimeStamp: number;
};

export type OffsetMountainDataType = {
  gameOffset: number;
  allPointsCorrected: PointType[];
  screenDimensions: screenDimensionsType;
  //shipOffset is really just here for the instrument panel?
  shipOffset: number;
};

export type ShipDataType = {
  direction: DirectionType;
  offsetX: number;
  offsetY: number;
  screenDimensions: { height: number; width: number };
};

export type UP_DOWN_NEITHER_type = "UP" | "DOWN" | "NEITHER";

export type UseMultipleKeysPropsType = {
  goHandler: () => {};
  resetAnimationHandler: () => {};
  stopHandler: () => {};
  changeShipYHandler: (upDownNeither: UP_DOWN_NEITHER_type) => {};
  changeShipDirectionHandler: () => {};
  fireShotHandler: () => {};
};

export type KeyMappingType = {
  mappedKey: string;
  name: string;
};

export type DirectionType = "left" | "right";
