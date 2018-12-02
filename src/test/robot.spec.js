const assert = require("chai").assert;
const expect = require("chai").expect;
const Robot = require("../Robot/robot");

let robot = null;
describe("Robot() ", function() {
  it("Is Robot being created correctly", function() {
    robot = new Robot(1, 1, "N", []);
    expect(robot).to.be.an.instanceof(Robot);
  });
});
