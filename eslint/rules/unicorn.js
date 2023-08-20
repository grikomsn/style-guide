// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: ["unicorn"],
  rules: {
    "unicorn/filename-case": ["error", { cases: { camelCase: true, kebabCase: true, pascalCase: true } }],
    "unicorn/prefer-node-protocol": ["off"],
  },
};

module.exports = config;
