// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  rules: {
    "@typescript-eslint/consistent-type-exports": ["warn", { fixMixedExportsWithInlineTypeSpecifier: true }],
    "@typescript-eslint/consistent-type-imports": ["warn"],
    "@typescript-eslint/method-signature-style": ["warn"],
    "@typescript-eslint/naming-convention": [
      "error",
      { format: ["PascalCase"], selector: ["typeLike", "enumMember"] },
      {
        custom: { match: false, regex: "^I[A-Z]|^(Interface|Props|State)$" },
        format: ["PascalCase"],
        selector: "interface",
      },
    ],
    "@typescript-eslint/no-redundant-type-constituents": ["warn"],
    "@typescript-eslint/no-unnecessary-qualifier": ["warn"],
    "@typescript-eslint/prefer-regexp-exec": ["warn"],
    "@typescript-eslint/switch-exhaustiveness-check": ["error"],
  },
};

module.exports = config;
