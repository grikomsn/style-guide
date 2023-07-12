// @ts-check

const { getPrettierPlugin } = require("./utils/prettier");

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/react",
    getPrettierPlugin(),
    require.resolve("./rules/react"),
    require.resolve("./rules/jsx-a11y"),
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};

module.exports = config;
