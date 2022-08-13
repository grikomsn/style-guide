// @ts-check

const fs = require("fs");
const path = require("path");

const { TYPESCRIPT_FILES } = require("./constants");

// eslint-disable-next-line no-nested-ternary
const tsConfig = fs.existsSync("tsconfig.json")
  ? path.resolve("tsconfig.json")
  : fs.existsSync("types/tsconfig.json")
  ? path.resolve("types/tsconfig.json")
  : undefined;

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
        project: tsConfig,
      },
      settings: {
        "import/resolver": {
          typescript: {
            project: tsConfig,
          },
        },
      },
    },
  ],
};

module.exports = config;
