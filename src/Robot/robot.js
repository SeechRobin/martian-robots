class Robot {
  /**
   * Create Robot with (x,y) coordinates, heading and the instructions
   * to operate the Robot
   * @param {Number} x
   * @param {Number} y
   * @param {String} heading
   * @param {Array} instructions
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
}

module.exports = Robot;
