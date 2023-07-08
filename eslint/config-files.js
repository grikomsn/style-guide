// @ts-check

const { CONFIG_FILES } = require("./constants");

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: require.resolve("./node"),
  rules: {
    "eslint-comments/no-unlimited-disable": ["off"],
  },
  overrides: [
    {
      files: CONFIG_FILES,
      rules: {
        "import/no-default-export": ["off"],
        "import/prefer-default-export": ["warn"],
      },
    },
  ],
};

module.exports = config;
