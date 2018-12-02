const expect = require("chai").expect;
const Map = require("../Map/map");

let map = null;

describe("Map() ", function() {
  it("Is Map being created correctly", function() {
    map = new Map(10, 10);
    expect(map).to.be.an.instanceof(Map);
  });
});
