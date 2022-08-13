// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  rules: {
    camelcase: ["error", { allow: ["^UNSAFE_"], ignoreDestructuring: false, properties: "never" }],
    "func-names": ["error", "as-needed"],
    "new-cap": ["error", { capIsNew: false }],
    "new-parens": ["warn"],
    "no-array-constructor": ["error"],
    "no-bitwise": ["error"],
    "no-lonely-if": ["warn"],
    "no-multi-assign": ["error"],
    "no-nested-ternary": ["error"],
    "no-unneeded-ternary": ["error"],
    "prefer-object-spread": ["warn"],
  },
};

module.exports = config;
