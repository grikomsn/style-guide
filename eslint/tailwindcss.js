// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: ["tailwindcss"],
  rules: {
    "tailwindcss/classnames-order": ["warn"],
  },
};

module.exports = config;
