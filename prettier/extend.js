// @ts-check

const defaultConfig = require(".");

/**
 * @param {import("prettier").Config} config
 * @returns {import("prettier").Config}
 */
function extend(config = {}) {
  return { ...defaultConfig, ...config };
}

module.exports = extend;
