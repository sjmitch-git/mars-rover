import { RoverService as Rover } from "../../services";
import { setInstructions, setPositionAndOrientation } from "../index";

describe("test setInstructions function", () => {
  const instruction1 = "LMLMLMLMM";
  const instruction2 = "MMRMMRMRRM";
  const instruction3 = "MMMMMLMLMMMMMRMRMMMMMLMLMMMMMRMRMMMMMLMLMMMMM";

  it("should set the correct position and orientation of the rover for 'LMLMLMLMM'", () => {
    setPositionAndOrientation(1, 2, "N");
    setInstructions(instruction1);
    expect(Rover.x).toEqual(1);
    expect(Rover.y).toEqual(3);
    expect(Rover.orientation).toEqual("N");
  });

  it("should set the correct position and orientation of the rover for 'MMRMMRMRRM'", () => {
    setPositionAndOrientation(3, 3, "E");
    setInstructions(instruction2);
    expect(Rover.x).toEqual(5);
    expect(Rover.y).toEqual(1);
    expect(Rover.orientation).toEqual("E");
  });

  it("should start the rover at 0,0,E and finish at 0,5,W after covering every grid", () => {
    setPositionAndOrientation(0, 0, "E");
    setInstructions(instruction3);
    expect(Rover.x).toEqual(0);
    expect(Rover.y).toEqual(5);
    expect(Rover.orientation).toEqual("W");
  });

  it("should throw an error for invalid instruction value", () => {
    expect(() => setInstructions("LMLMLXMLMM")).toThrow(
      `Invalid instruction: X. Provide a value of 'L', 'R' or 'M'`
    );
  });

  it("should throw an error for invalid instruction value", () => {
    expect(() => setInstructions("LMLMLXMLMM")).toThrow(
      `Invalid instruction: X. Provide a value of 'L', 'R' or 'M'`
    );
  });

  it("should throw error if edge of grid has been reched", () => {
    // North
    setPositionAndOrientation(0, 0, "E");
    expect(() => setInstructions("LMMMMMM")).toThrow(
      `Rover has stopped at x:0 y:5! Edge of grid has been reached.`
    );
    // East
    setPositionAndOrientation(0, 0, "E");
    expect(() => setInstructions("MMMMMM")).toThrow(
      `Rover has stopped at x:5 y:0! Edge of grid has been reached.`
    );
    // South
    setPositionAndOrientation(0, 0, "E");
    expect(() => setInstructions("MMRM")).toThrow(
      `Rover has stopped at x:2 y:0! Edge of grid has been reached.`
    );
    // West
    setPositionAndOrientation(0, 0, "E");
    expect(() => setInstructions("LLM")).toThrow(
      `Rover has stopped at x:0 y:0! Edge of grid has been reached.`
    );
  });
});
