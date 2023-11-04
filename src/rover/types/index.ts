export interface RoverProps {
  instruction: "L" | "R" | "M";
  rotation: "L" | "R";
  movement: "M";
  orientation: "N" | "E" | "S" | "W";
  x: number;
  y: number;
}
