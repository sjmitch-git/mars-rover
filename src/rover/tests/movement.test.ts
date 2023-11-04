import { RoverService as Rover } from "../../services";
import { setMovement } from "../index";

describe("test setMovement function", () => {
  Rover.x = 0;
  Rover.y = 0;
  Rover.orientation = "N";
  it("should move rover North 1 grid space", () => {
    setMovement("M");
    expect(Rover.x).toBe(0);
    expect(Rover.y).toBe(1);
  });
  it("should move rover North 2 grid spaces", () => {
    setMovement("M");
    setMovement("M");
    expect(Rover.x).toBe(0);
    expect(Rover.y).toBe(3);
  });
  it("should move rover East 3 grid spaces", () => {
    Rover.orientation = "E";
    setMovement("M");
    setMovement("M");
    setMovement("M");
    expect(Rover.x).toBe(3);
    expect(Rover.y).toBe(3);
  });
  it("should move rover South 2 grid spaces", () => {
    Rover.orientation = "S";
    setMovement("M");
    setMovement("M");
    expect(Rover.x).toBe(3);
    expect(Rover.y).toBe(1);
  });
  it("should move rover West 1 grid space", () => {
    Rover.orientation = "W";
    setMovement("M");
    expect(Rover.x).toBe(2);
    expect(Rover.y).toBe(1);
  });
  it(`should return error message when input is invalid`, () => {
    expect(() => setMovement("X")).toThrow("Invalid movement value. Please provide 'M'.");
  });
});
