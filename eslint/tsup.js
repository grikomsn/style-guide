// @ts-check

const { TSUP_FILES } = require("./constants");

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      files: TSUP_FILES,
      rules: {
        "import/no-default-export": ["off"],
        "import/prefer-default-export": ["error"],
      },
    },
  ],
};

module.exports = config;
