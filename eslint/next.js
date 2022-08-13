// @ts-check

const { JAVASCRIPT_FILES } = require("./constants");

const babelOptions = {
  presets: (() => {
    try {
      require.resolve("next/babel");
      return ["next/babel"];
    } catch (e) {
      return [];
    }
  })(),
};

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "plugin:@next/next/core-web-vitals",
    require.resolve("./rules/next/import"),
    require.resolve("./rules/next/jsx-a11y"),
  ],
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parserOptions: { babelOptions },
    },
  ],
};

module.exports = config;
