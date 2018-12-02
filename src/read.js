const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

rl.on("line", function(line) {
  line = line.trim();
  if (line) {
    lines.push(line);
  } else {
    rl.close();
  }
});

rl.on("close", function(line) {
  console.log(lines);
});
