import { GridProps } from "./types";
import { GridService as Grid } from "../services";

type GridPropsX = Pick<GridProps, "x">;
type GridPropsY = Pick<GridProps, "y">;

export const setPlateauGrid = (x: number, y: number) => {
  if (x <= 0 || y <= 0) {
    throw new Error("Please enter a number greater than zero.");
  }
  Grid.x = x;
  Grid.y = y;
};

export const setPlateauGridX = (x: number) => {
  if (x <= 0) {
    throw new Error("Please enter a number greater than zero.");
  }
  Grid.x = x;
};

export const setPlateauGridY = (y: number) => {
  if (y <= 0) {
    throw new Error("Please enter a number greater than zero.");
  }
  Grid.y = y;
};

export const getPlateauGrid = (): GridProps => {
  return { x: Grid.x, y: Grid.y };
};

export const getPlateauGridX = (): GridPropsX => {
  return { x: Grid.x };
};

export const getPlateauGridY = (): GridPropsY => {
  return { y: Grid.y };
};
