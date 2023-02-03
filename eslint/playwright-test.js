// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["plugin:playwright/playwright-test", require.resolve("./rules/playwright-test.js")],
};

module.exports = config;
