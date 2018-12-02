const DIRECTIONS = ["N", "E", "S", "W"];
class Robot {
  /**
   * Create Robot with (x,y) coordinates, heading and the instructions
   * to operate the Robot
   * @param {Number} x position
   * @param {Number} y position
   * @param {String} heading the robots heading/direction
   * @param {Array} instructions these are the direction "FLRF" the Robot can take
   */
  constructor(x, y, heading, instructions) {
    (this.position = {
      x: x,
      y: y,
      heading: heading
    }),
      (this.instructions = instructions),
      (this.lost = false);
  }

  /**
   * Moves the robot forward if facing:
   * N: y+1
   * E: x+1
   * S: y-1
   * W: x-1
   * return new advanced position
   */
  moveForward() {
    switch (this.position.heading) {
      case "N":
        return (this.position = { ...this.position, y: this.position.y + 1 });
      case "E":
        return (this.position = { ...this.position, x: this.position.x + 1 });
      case "S":
        return (this.position = { ...this.position, y: this.position.y - 1 });
      case "W":
        return (this.position = { ...this.position, x: this.position.x - 1 });
      default:
        return this.position;
    }
  }
  /**
   * The robot turns left 90 degrees and remains on the current grid point.
   * Check if current direction is in the begining of the array, if it is at the beginning make the
   * last one the new direction. If not new direction is position of current direction -1
   */
  turnLeft() {
    if (DIRECTIONS.indexOf(this.position.heading) === 0) {
      this.position.heading = DIRECTIONS[3];
    } else {
      this.position.heading =
        DIRECTIONS[DIRECTIONS.indexOf(this.position.heading) - 1];
    }
  }
  /**
   * The robot turns right 90 degrees and remains on the current grid point
   * Check if current direction is in the end of the array, if it is at the end make the
   * first item the new direction, if not new direction is position of current direction +1
   */
  turnRight() {
    if (DIRECTIONS.indexOf(this.position.heading) === 3) {
      this.position.heading = DIRECTIONS[0];
    } else {
      this.position.heading =
        DIRECTIONS[DIRECTIONS.indexOf(this.position.heading) + 1];
    }
  }
  /**
   * Return true if anyof the coordinates are greater than Max or less than origin.
   * @param {Object} map the map which has origin (0,0) and (maxX,maxY)
   */
  isOutOfBounds(map) {
    return (
      this.position.x > map.maxX ||
      this.position.x < map.minX ||
      this.position.y > map.maxY ||
      this.position.y < map.minY
    );
  }

  /**
   * Check if Robot is in a smelly postion
   * @param {*} map the map which has origin (0,0) and (maxX,maxY)
   */
  isPositionSmelly(map) {
    return map.scents.some(scent => this.areTheyEqual(this.position, scent));
  }
  /**
   * Check equality on the two postions
   * @param {*} position1
   * @param {*} position2
   */
  areTheyEqual(position1, position2) {
    return position1.x === position2.x && position1.y === position2.y;
  }
}

module.exports = Robot;
