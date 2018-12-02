class Map {
  /**
   * Create Map Object with upper right coordinates
   * Bottom left origin set to (0,0)
   * scents array to keep track of dangerous grid positions
   * @param {Number} maxX
   * @param {Number} maxY
   */
  constructor(maxX, maxY) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.minX = 0;
    this.minY = 0;
    this.scents = [];
  }
}

module.exports = Map;
