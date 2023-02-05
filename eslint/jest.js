// @ts-check

const { TYPESCRIPT_FILES } = require("./constants");

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["plugin:jest/recommended", "plugin:testing-library/react", require.resolve("./rules/jest")],
  plugins: ["testing-library"],
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      rules: {
        "@typescript-eslint/unbound-method": ["off"],
        "jest/unbound-method": ["error"],
      },
    },
  ],
};

module.exports = config;
