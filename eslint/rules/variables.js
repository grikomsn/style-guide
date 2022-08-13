// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  rules: {
    "no-label-var": ["error"],
    "no-undef-init": ["warn"],
    "no-unused-vars": ["off"],
    "unused-imports/no-unused-vars": [
      "warn",
      { args: "after-used", argsIgnorePattern: "^_", ignoreRestSiblings: false, vars: "all", varsIgnorePattern: "^_" },
    ],
  },
};

module.exports = config;
