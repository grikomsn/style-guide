// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/react",
    "plugin:prettier/recommended",
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
