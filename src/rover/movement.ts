import { RoverService as Rover } from "../services";
import { RoverProps } from "../rover/types";

const isMovement = (input: string): input is RoverProps["movement"] => {
  return ["M"].includes(input);
};

const moveRover = () => {
  switch (Rover.orientation) {
    case "N":
      ++Rover.y;
      break;
    case "S":
      --Rover.y;
      break;
    case "E":
      ++Rover.x;
      break;
    case "W":
      --Rover.x;
      break;
  }
};

export const setMovement = (movement: string) => {
  if (!isMovement(movement)) {
    throw new Error("Invalid movement value. Please provide 'M'.");
  }
  moveRover();
};
