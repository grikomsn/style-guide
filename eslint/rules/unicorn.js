// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: ["unicorn"],
  rules: {
    "unicorn/filename-case": ["error", { case: "kebabCase" }],
  },
};

module.exports = config;
