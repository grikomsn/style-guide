// @ts-check

const { extendEslint } = require(".");

module.exports = extendEslint(["config-authoring", "typescript"], {
  root: true,
});
