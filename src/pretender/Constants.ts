import { UP_DOWN_NEITHER_type } from "./types";

export const WRAP_DISTANCE = 2000;

export const PANEL_WIDTH = 100; //The distance between mountain points

export const INSTRUMENT_PANEL_HEIGHT = 50;

export const THRUST_KEY = "shift";

export const SHIP_DOWN_KEY = "z"; //TODO: if this is "capslock" the key up handler doesn't really work, even with prevent default
export const SHIP_UP_KEY = "tab";

export const UP_DOWN_NEITHER: {
  UP: UP_DOWN_NEITHER_type;
  DOWN: UP_DOWN_NEITHER_type;
  NEITHER: UP_DOWN_NEITHER_type;
} = { UP: "UP", DOWN: "DOWN", NEITHER: "NEITHER" };

export const UPDATE_KEY_BINDING = "UPDATE_KEY_BINDING";
