import { GridService as Grid, RoverService as Rover } from "../../services";

import { setPositionAndOrientation } from "../index";

describe("test setPositionAndOrientation function", () => {
  Grid.x = 5;
  Grid.y = 5;

  it("should set the correct x position of the rover", () => {
    setPositionAndOrientation(5, 5, "N");
    expect(Rover.x).toEqual(5);
  });

  it("should set the correct y position of the rover", () => {
    setPositionAndOrientation(5, 5, "N");
    expect(Rover.y).toEqual(5);
  });

  it("should set the correct orientation of the rover", () => {
    setPositionAndOrientation(5, 5, "N");
    expect(Rover.orientation).toEqual("N");
  });

  it("should throw an error for invalid x value", () => {
    expect(() => setPositionAndOrientation(10, 5, "E")).toThrow(
      `Invalid x position. Provide a number between 0 and ${Grid.x}`
    );
  });

  it("should throw an error for invalid y value", () => {
    expect(() => setPositionAndOrientation(5, 8, "E")).toThrow(
      `Invalid y position. Provide a number between 0 and ${Grid.y}`
    );
  });

  it("should throw an error for invalid orientation value", () => {
    expect(() => setPositionAndOrientation(0, 0, "X")).toThrow(
      "Invalid orientation value. Please provide one of 'N', 'E', 'S' or 'E'."
    );
  });
});
