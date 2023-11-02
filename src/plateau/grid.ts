import { GridProps } from "./types";
import { GridService as Grid } from "../services";

type GridPropsX = Omit<GridProps, "y">;
type GridPropsY = Omit<GridProps, "x">;

export const setPlateauGrid = (x: number, y: number) => {
  Grid.x = x;
  Grid.y = y;
};

export const setPlateauGridX = (x: number) => {
  Grid.x = x;
};

export const setPlateauGridY = (y: number) => {
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
