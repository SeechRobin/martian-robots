const assert = require("chai").assert;
const expect = require("chai").expect;
const Robot = require("../src/Robot/robot");

let robot = null;
describe("Robot() ", function() {
  it("Is Robot being created correctly", function() {
    robot = new Robot(1, 1, "N", []);
    expect(robot).to.be.an.instanceof(Robot);
  });
});

describe("Robot movement ", function() {
  it("Turning Left", function() {
    robot = new Robot(1, 1, "N", []);
    robot.turnLeft();
    assert.equal(robot.position.heading, "W");
  });
  it("Turning Right", function() {
    robot = new Robot(1, 1, "N", []);
    robot.turnRight();
    assert.equal(robot.position.heading, "E");
  });
  it("Move Forward Facing North", function() {
    robot = new Robot(1, 1, "N", []);
    robot.moveForward();
    assert.equal(robot.position.y, 2);
  });
  it("Move Forward Facing East", function() {
    robot = new Robot(1, 1, "E", []);
    robot.moveForward();
    assert.equal(robot.position.x, 2);
  });
  it("Move Forward Facing South", function() {
    robot = new Robot(1, 1, "S", []);
    robot.moveForward();
    assert.equal(robot.position.y, 0);
  });
  it("Move Forward Facing West", function() {
    robot = new Robot(1, 1, "W", []);
    robot.moveForward();
    assert.equal(robot.position.x, 0);
  });
});
