// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  rules: {
    "jsx-a11y/alt-text": ["error", { elements: ["img"], img: ["Image"] }],
    "jsx-a11y/anchor-has-content": ["error", { components: ["Anchor"] }],
    "jsx-a11y/anchor-is-valid": ["error", { components: ["Link"] }],
    "jsx-a11y/img-redundant-alt": ["error", { components: ["Image"] }],
  },
};

module.exports = config;
