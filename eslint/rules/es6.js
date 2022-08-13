// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  rules: {
    "no-useless-computed-key": ["warn"],
    "no-useless-rename": ["warn"],
    "no-var": ["error"],
    "object-shorthand": ["warn"],
    "prefer-const": ["warn"],
    "prefer-numeric-literals": ["error"],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["warn"],
    "symbol-description": ["error"],
  },
};

module.exports = config;
