// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: ["eslint-plugin-tsdoc"],
  rules: {
    "tsdoc/syntax": ["error"],
  },
};

module.exports = config;
