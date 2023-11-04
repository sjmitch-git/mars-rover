import { RoverService as Rover } from "../../services";
import { setOrientation, getOrientation } from "../index";

describe("test setOrientation function", () => {
  it("should set orientation from N to W", () => {
    Rover.orientation = "N";
    setOrientation("L");
    expect(Rover.orientation).toBe("W");
  });
  it("should set orientation from N to S", () => {
    Rover.orientation = "N";
    setOrientation("L");
    setOrientation("L");
    expect(Rover.orientation).toBe("S");
  });
  it("should set orientation from N to E", () => {
    Rover.orientation = "N";
    setOrientation("L");
    setOrientation("L");
    setOrientation("L");
    expect(Rover.orientation).toBe("E");
  });

  it("should set orientation from S to E", () => {
    Rover.orientation = "S";
    setOrientation("R");
    setOrientation("R");
    setOrientation("R");
    expect(Rover.orientation).toBe("E");
  });
  it("should set orientation from S to N", () => {
    Rover.orientation = "S";
    setOrientation("R");
    setOrientation("R");
    expect(Rover.orientation).toBe("N");
  });
  it("should set orientation from S to W", () => {
    Rover.orientation = "S";
    setOrientation("R");
    expect(Rover.orientation).toBe("W");
  });
});

// GET rover orientation
describe("test getOrientation function", () => {
  it("should return the current rover orientation", () => {
    Rover.orientation = "S";
    setOrientation("R");
    expect(getOrientation()).toEqual("W");
  });
});
