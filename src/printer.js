exports.print = function(robots) {
  for (let i = 0; i < robots.length; i++) {
    let finalPosition = formatt(robots[i]);
    console.log(finalPosition); //Log to console can implement further to return data better
  }
};
/**
 * Return Robot final position
 * x, y, heading and LOST if the robot is out of bounds
 * 3 3 N LOST
 * 2 3 S
 *
 * @param {Object} robot
 */
function formatt(robot) {
  const { x, y, heading } = robot.position;
  return `${x} ${y} ${heading} ${robot.lost ? "LOST" : ""}`;
}
