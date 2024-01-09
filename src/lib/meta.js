const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const { version } = require(resolve("../../package.json"));

function createDB(name) {
  console.log(name);
}

function hasDB(name) {
  console.log(name);
}

function updateDB(options = {}) {
  console.log(options);
}

function removeDB(name) {
  console.log();
}

function getDB(name) {
  console.log(name);
}

module.exports = {
  version,
  createDB,
  hasDB,
  updateDB,
  removeDB,
  getDB,
};
