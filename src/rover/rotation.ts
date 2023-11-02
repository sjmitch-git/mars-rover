import { RoverService as Rover } from "../services";
import { RoverProps } from "../rover/types";

const isRotation = (input: string): input is RoverProps["rotation"] => {
  return ["L", "R"].includes(input);
};

export const setOrientation = (rotation: string) => {
  if (!isRotation(rotation)) {
    throw new Error("Invalid rotation value. Please provide either 'L' or 'R'.");
  }

  if ((rotation = "L")) {
    switch (Rover.orientation) {
      case "N":
        Rover.orientation = "W";
        break;
      case "E":
        Rover.orientation = "N";
        break;
      case "S":
        Rover.orientation = "E";
        break;
      case "W":
        Rover.orientation = "S";
        break;
    }
  } else {
    switch (Rover.orientation) {
      case "N":
        Rover.orientation = "E";
        break;
      case "E":
        Rover.orientation = "S";
        break;
      case "S":
        Rover.orientation = "W";
        break;
      case "W":
        Rover.orientation = "N";
        break;
    }
  }
};

export const getOrientation = () => {
  return Rover.orientation;
};
