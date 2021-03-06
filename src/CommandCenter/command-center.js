const processor = require("./processor");
const printer = require("../printer");

/**
 * Robots and Map Object processing
 * Loops thrugh each Robot and returns final positions
 * @param {Object} data
 */
function execute(data) {
  const { robots, map } = data;

  let finalRobotPositions = [];

  for (let i = 0; i < robots.length; i++) {
    let robot = robots[i];
    for (let j = 0; j < robot.instructions.length; j++) {
      let operation = robot.instructions[j];

      if (operation === "R") {
        robot.turnRight();
      } else if (operation === "L") {
        robot.turnLeft();
      } else if (operation === "F") {
        const position = robot.position;
        const smelly = robot.isPositionSmelly(map);

        robot.moveForward();

        const outOfBounds = robot.isOutOfBounds(map);

        if (outOfBounds) {
          if (smelly) {
            robot.position = position; // move the robot back to the last safe space
            continue;
          }
          map.scents.push({ x: position.x, y: position.y });
          robot.lost = true;
          robot.position = position;
          break;
        }
      } else {
        throw "Illegal Instruction";
      }
    }
    finalRobotPositions = [...finalRobotPositions, robot];
  }

  return finalRobotPositions;
}
/**
 * Command Center to drive the whole program
 */
exports.command = function(input) {
  const robotAndMapData = processor.process(input);
  const finalRobotPostions = execute(robotAndMapData);
  printer.print(finalRobotPostions);
};
