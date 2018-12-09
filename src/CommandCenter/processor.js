const Map = require("../Map/map");
const Robot = require("../Robot/robot");

/**
 * Input CLI input and return an array of Map and Robot Ojects
 * @param {String} input
 */
function parseInput(input) {
  const chunks = input[0].trim().split(" ");
  const coordinates = {
    x: parseInt(chunks[0]),
    y: parseInt(chunks[1])
  };
  const map = new Map(coordinates.x, coordinates.y);

  let robots = [];
  for (let i = 1; i < input.length; i += 2) {
    const position = createRobotPosition(input[i]);
    const instructions = splitInstructions(input[i + 1]);
    const robot = new Robot(
      position.x,
      position.y,
      position.heading,
      instructions
    );
    robots = [...robots, robot];
  }

  return { map, robots };
}
/**
 * Process line and returns Robot position
 * {x, y, heading}
 * @param {String} line
 */
function createRobotPosition(line) {
  const chunks = line.trim().split(" ");

  return {
    x: parseInt(chunks[0]),
    y: parseInt(chunks[1]),
    heading: chunks[2]
  };
}

/**
 * Returns the string of instructions as an array
 * @param {String} line
 */
function splitInstructions(line) {
  return line.trim().split("");
}
/**
 * In this module we process the input and convert
 * it to Map and Robot objects
 */
exports.process = function(input) {
  const data = parseInput(input);
  return data;
};
