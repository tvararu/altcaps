#!/usr/bin/env node
module.exports = altspaces;
function altspaces(words) {
  return words.split("").join(" ");
}

if (!module.parent) {
  const concat = require("concat-stream");
  process.stdin.resume();
  process.stdin.pipe(
    concat(function(data) {
      process.stdout.write(altspaces(data.toString()));
    })
  );
}
