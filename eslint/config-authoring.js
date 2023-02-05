// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: require.resolve("./node"),
  overrides: [
    {
      files: ["eslint/rules/**", "prettier/**"],
      rules: {
        "sort-keys": ["error"],
      },
    },
  ],
};

module.exports = config;
