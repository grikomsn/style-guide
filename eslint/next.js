// @ts-check

const { JAVASCRIPT_FILES, NEXT_CONFIG_FILES } = require("./constants");
const { requirePackage } = require("./utils/package-manager");

requirePackage("next", "@next/eslint-plugin-next");

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
  extends: ["plugin:@next/next/recommended"],
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parserOptions: { babelOptions },
    },
    {
      files: NEXT_CONFIG_FILES,
      rules: {
        "import/no-default-export": ["off"],
        "import/prefer-default-export": ["error"],
      },
    },
  ],
};

module.exports = config;
