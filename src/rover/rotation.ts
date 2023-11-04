import { RoverService as Rover } from "../services";
import { RoverProps } from "../rover/types";

const isRotation = (input: string): input is RoverProps["rotation"] => {
  return ["L", "R"].includes(input);
};

const orientations: RoverProps["orientation"][] = ["N", "E", "S", "W"];

const rotateLeft = (orientation: string) => {
  const currentOrientationIndex = orientations.indexOf(orientation as RoverProps["orientation"]);
  Rover.orientation = orientations[(currentOrientationIndex + 3) % 4];
};

const rotateRight = (orientation: string) => {
  const currentOrientationIndex = orientations.indexOf(orientation as RoverProps["orientation"]);
  Rover.orientation = orientations[(currentOrientationIndex + 1) % 4];
};

export const setOrientation = (rotation: string) => {
  if (!isRotation(rotation)) {
    throw new Error("Invalid rotation value. Please provide either 'L' or 'R'.");
  }

  rotation === "L" ? rotateLeft(Rover.orientation) : rotateRight(Rover.orientation);
};

export const getOrientation = () => {
  return Rover.orientation;
};
