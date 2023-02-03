// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  rules: {
    "no-await-in-loop": ["error"],
    "no-console": ["warn"],
    "no-constant-binary-expression": ["warn"],
    "no-promise-executor-return": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-unreachable-loop": ["error"],
  },
};

module.exports = config;
