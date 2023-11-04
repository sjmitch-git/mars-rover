import { setOrientation, setMovement } from "../rover";

const error = (instruction: string) => {
  throw new Error(`Invalid instruction: ${instruction}. Provide a value of 'L', 'R' or 'M'`);
};

export const setInstructions = (instructions: string) => {
  const splitInstructions = instructions.split("");

  for (const instruction of splitInstructions) {
    switch (instruction) {
      case "L":
        setOrientation("L");
        break;
      case "R":
        setOrientation("R");
        break;
      case "M":
        setMovement("M");
        break;
      default:
        error(instruction);
        break;
    }
  }
};
