const processor = require("./processor");

/**
 * Command Center to drive the whole program
 */
exports.command = function(input) {
  const data = processor.process(input);
  console.log(data);
};
