#!/usr/bin/env node
module.exports = altspaces;
function altspaces(words) {
  return words.split("").join(" ");
}

if (!module.parent) {
  let emitSpace = false;
  process.stdin.on("data", function(data) {
    if (emitSpace) { process.stdout.write(" "); }
    process.stdout.write(altspaces(data.toString()));
    emitSpace = true;
  })
  process.stdin.resume();
}
