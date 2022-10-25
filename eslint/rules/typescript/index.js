// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  rules: {
    "@typescript-eslint/array-type": ["warn"],
    "@typescript-eslint/consistent-indexed-object-style": ["warn"],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as", objectLiteralTypeAssertions: "allow-as-parameter" },
    ],
    "@typescript-eslint/consistent-type-definitions": ["warn"],
    "@typescript-eslint/consistent-type-exports": ["warn", { fixMixedExportsWithInlineTypeSpecifier: true }],
    "@typescript-eslint/consistent-type-imports": ["warn"],
    "@typescript-eslint/method-signature-style": ["warn"],
    "@typescript-eslint/naming-convention": [
      "error",
      { format: ["PascalCase"], selector: "typeLike" },
      {
        custom: { match: false, regex: "^I[A-Z]|^(Interface|Props|State)$" },
        format: ["PascalCase"],
        selector: "interface",
      },
    ],
    "@typescript-eslint/no-base-to-string": ["error"],
    "@typescript-eslint/no-confusing-non-null-assertion": ["warn"],
    "@typescript-eslint/no-duplicate-imports": ["error"],
    "@typescript-eslint/no-explicit-any": ["warn"],
    "@typescript-eslint/no-extraneous-class": ["error"],
    "@typescript-eslint/no-invalid-void-type": ["error"],
    "@typescript-eslint/no-meaningless-void-operator": ["error"],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["warn"],
    "@typescript-eslint/no-unnecessary-condition": ["warn"],
    "@typescript-eslint/no-unnecessary-qualifier": ["warn"],
    "@typescript-eslint/no-unnecessary-type-arguments": ["warn"],
    "@typescript-eslint/no-unsafe-assignment": ["warn"],
    "@typescript-eslint/prefer-includes": ["warn"],
    "@typescript-eslint/prefer-literal-enum-member": ["error"],
    "@typescript-eslint/prefer-optional-chain": ["error"],
    "@typescript-eslint/prefer-reduce-type-parameter": ["warn"],
    "@typescript-eslint/prefer-regexp-exec": ["warn"],
    "@typescript-eslint/prefer-string-starts-ends-with": ["warn"],
    "@typescript-eslint/prefer-ts-expect-error": ["warn"],
    "@typescript-eslint/restrict-template-expressions": ["off"],
    "@typescript-eslint/switch-exhaustiveness-check": ["error"],
  },
};

module.exports = config;
