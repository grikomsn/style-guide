// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      files: ["pages/**/*.{js,jsx,ts,tsx}", "next.config.{js,cjs,mjs}"],
      rules: {
        "import/prefer-default-export": ["error"],
        "unicorn/filename-case": ["off"],
      },
    },
  ],
};

module.exports = config;
