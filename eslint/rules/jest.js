// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  rules: {
    "jest/no-duplicate-hooks": ["error"],
    "jest/prefer-lowercase-title": ["warn"],
    "jest/require-top-level-describe": ["error"],
  },
};

module.exports = config;
