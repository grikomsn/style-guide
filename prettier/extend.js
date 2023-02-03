// @ts-check

const defaultConfig = require(".");

/**
 * @param {import("prettier").Config} config
 * @returns {import("prettier").Config}
 */
module.exports = (config = {}) => {
  return { ...defaultConfig, ...config };
};
