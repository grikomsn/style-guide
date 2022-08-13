// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: require.resolve("./base"),
  env: {
    node: true,
  },
};

module.exports = config;
