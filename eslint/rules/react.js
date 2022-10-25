// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  rules: {
    "react/button-has-type": ["warn"],
    "react/function-component-definition": ["warn", { namedComponents: "arrow-function" }],
    "react/jsx-boolean-value": ["warn"],
    "react/jsx-curly-brace-presence": ["warn"],
    "react/jsx-fragments": ["warn"],
    "react/jsx-no-target-blank": ["error", { allowReferrer: true }],
    "react/jsx-no-useless-fragment": ["warn"],
    "react/jsx-pascal-case": ["warn"],
    "react/jsx-sort-props": ["warn", { reservedFirst: ["key"] }],
    "react/no-array-index-key": ["warn"],
    "react/prop-types": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "react/self-closing-comp": ["warn"],
  },
};

module.exports = config;
