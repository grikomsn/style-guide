// @ts-check

const { JAVASCRIPT_FILES } = require("./constants");

// https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import("eslint").Linter.Config} */
const config = {
  env: {
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:prettier/recommended",
    require.resolve("./rules/best-practice"),
    require.resolve("./rules/es6"),
    require.resolve("./rules/import"),
    require.resolve("./rules/possible-errors"),
    require.resolve("./rules/stylistic"),
    require.resolve("./rules/unicorn"),
    require.resolve("./rules/variables"),
  ],
  ignorePatterns: ["!.*.js"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["simple-import-sort", "unused-imports"],
  reportUnusedDisableDirectives: true,
  settings: {
    "import/resolver": { node: {} },
  },
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parser: "@babel/eslint-parser",
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          parserOpts: {
            plugins: ["jsx"],
          },
        },
      },
    },
  ],
};

module.exports = config;
