// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: require.resolve("./node"),
  rules: {
    "eslint-comments/no-unlimited-disable": ["off"],
    "unicorn/prefer-node-protocol": ["off"],
  },
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
