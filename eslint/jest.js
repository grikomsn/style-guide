// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: ["testing-library"],
  extends: ["plugin:jest/recommended", "plugin:testing-library/react"],
};

module.exports = config;
