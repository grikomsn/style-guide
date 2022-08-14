// @ts-check

const { TYPESCRIPT_FILES } = require("./constants");
const { getTsconfigPath } = require("./helpers");

const project = getTsconfigPath();

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
        require.resolve("./rules/typescript"),
        require.resolve("./rules/typescript/extension"),
        require.resolve("./rules/typescript/import"),
        require.resolve("./rules/typescript/variables"),
        require.resolve("./rules/tsdoc"),
      ],
      parserOptions: {
        project,
      },
      settings: {
        "import/resolver": {
          typescript: {
            project,
          },
        },
      },
    },
  ],
};

module.exports = config;
