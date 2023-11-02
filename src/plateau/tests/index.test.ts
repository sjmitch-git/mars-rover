import { GridService as Grid } from "../../services";
import {
  setPlateauGrid,
  setPlateauGridX,
  setPlateauGridY,
  getPlateauGrid,
  getPlateauGridX,
  getPlateauGridY,
} from "../index";

// SET grid functions
describe("test setPlateauGrid function", () => {
  it("should set Grid.x to 10 and Grid.y to 8 when calling setPlateauGrid(10, 8)", () => {
    setPlateauGrid(10, 8);
    expect(Grid.x).toBe(10);
    expect(Grid.y).toBe(8);
  });

  it("should throw an error for negative values", () => {
    expect(() => setPlateauGrid(-10, 8)).toThrow("Please enter a number greater than zero.");
  });
});

describe("test setPlateauGridX function", () => {
  it("should set Grid.x to 16 when calling setPlateauGridX(16)", () => {
    setPlateauGridX(16);
    expect(Grid.x).toBe(16);
  });
  it("should throw an error for negative values", () => {
    expect(() => setPlateauGridX(-10)).toThrow("Please enter a number greater than zero.");
  });
});

describe("test setPlateauGridY function", () => {
  it("should set Grid.y to 6 when calling setPlateauGridY(6)", () => {
    setPlateauGridY(6);
    expect(Grid.y).toBe(6);
  });
  it("should throw an error for negative values", () => {
    expect(() => setPlateauGridY(-10)).toThrow("Please enter a number greater than zero.");
  });
});

// GET grid functions
describe("test getPlateauGrid function", () => {
  it("should return the correct grid values after setting the plateau", () => {
    setPlateauGrid(6, 12);
    const expectedGrid = { x: 6, y: 12 };
    const actualGrid = getPlateauGrid();
    expect(actualGrid).toEqual(expectedGrid);
  });
});

describe("test getPlateauGridX function", () => {
  it("should return the correct grid x value after setting the plateau", () => {
    setPlateauGrid(6, 12);
    const expectedGridX = { x: 6 };
    const actualGridX = getPlateauGridX();
    expect(actualGridX).toEqual(expectedGridX);
  });
});

describe("test getPlateauGridY function", () => {
  it("should return the correct grid y value after setting the plateau", () => {
    setPlateauGrid(6, 12);
    const expectedGridY = { y: 12 };
    const actualGridY = getPlateauGridY();
    expect(actualGridY).toEqual(expectedGridY);
  });
});
