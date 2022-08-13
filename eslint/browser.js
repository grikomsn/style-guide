// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: require.resolve("./base"),
  env: {
    browser: true,
  },
};

module.exports = config;
