import { GridService as Grid } from "../services/grid.service";
import { RoverService as Rover } from "../services/rover.service";
import { ControlsProps } from "./types";

const isOrientation = (input: string): input is ControlsProps["orientation"] => {
  return ["N", "E", "S", "W"].includes(input);
};

const validCoordsX = (x: number): boolean => (x <= Grid.x && x >= 0 ? true : false);

const validCoordsY = (y: number): boolean => (y <= Grid.y && y >= 0 ? true : false);

export const setPositionAndOrientation = (x: number, y: number, orientation: string) => {
  if (!validCoordsX(x)) {
    throw new Error(`Invalid x position. Provide a number between 0 and ${Grid.x}`);
  }

  if (!validCoordsY(y)) {
    throw new Error(`Invalid y position. Provide a number between 0 and ${Grid.y}`);
  }

  if (!isOrientation(orientation)) {
    throw new Error("Invalid orientation value. Please provide one of 'N', 'E', 'S' or 'W'.");
  }

  Rover.x = x;
  Rover.y = y;
  Rover.orientation = orientation;
};
