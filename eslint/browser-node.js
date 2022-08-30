// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: require.resolve("./base"),
  env: {
    browser: true,
    node: true,
  },
};

module.exports = config;
