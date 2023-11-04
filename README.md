# Mars Rover

## Install

```
npm install
```

## Test

```
npm run test
```

All tests should pass.

## Project Structure

### Modules

Project is divided into 3 modules:

- controls
- plateau
- rover

Tests and types are located in each module.

### Services

Services are included to allow communication between modules.

- grid (plateau)
- rover

## Future Enhancements

### Allow multiple rovers

Create a Rover class.

```
// assuming a Rover class has been created

const rover1 = new Rover(0, 0, "N");
const rover2 = new Rover(3, 3, "E");
const rover3 = new Rover(5, 5, "W");
```

Would need to include collision detection functionality

### Allow multiple grids of differing dimensions.

Create a grid class. Create a 'map' on which to place the multiple grids.
