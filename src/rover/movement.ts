import { RoverService as Rover, GridService as Grid } from "../services";

const error = () => {
  throw new Error(`Rover has stopped at x:${Rover.x} y:${Rover.y}! Edge of grid has been reached.`);
};

const moveRover = () => {
  const actions = {
    N: () => {
      if (Rover.y === Grid.y) error();
      ++Rover.y;
    },
    S: () => {
      if (Rover.y === 0) error();
      --Rover.y;
    },
    E: () => {
      if (Rover.x === Grid.x) error();
      ++Rover.x;
    },
    W: () => {
      if (Rover.x === 0) error();
      --Rover.x;
    },
  };

  const action = actions[Rover.orientation];
  if (action) {
    action();
  }
};

export const setMovement = () => {
  moveRover();
};
