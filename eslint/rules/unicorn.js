// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: ["unicorn"],
  rules: {
    "unicorn/filename-case": ["error", { cases: { camelCase: true, kebabCase: true, pascalCase: true } }],
  },
};

module.exports = config;
