import { UP_DOWN_NEITHER_type } from "./types";

export const WRAP_DISTANCE = 2000;

export const PANEL_WIDTH = 100; //The distance between mountain points

export const INSTRUMENT_PANEL_HEIGHT = 50;

export const SHOOT_KEY = "shift";
export const THRUST_KEY = ";";

export const SHIP_DOWN_KEY = "s"; //TODO: if this is "capslock" the key up handler doesn't really work, even with prevent default
export const SHIP_UP_KEY = "a";
export const CHANGE_SHIP_DIRECTION_KEY = " ";

export const UP_DOWN_NEITHER: {
  UP: UP_DOWN_NEITHER_type;
  DOWN: UP_DOWN_NEITHER_type;
  NEITHER: UP_DOWN_NEITHER_type;
} = { UP: "UP", DOWN: "DOWN", NEITHER: "NEITHER" };

export const UPDATE_KEY_BINDING = "UPDATE_KEY_BINDING";

export const MAX_BULLET_AGE = 4000;