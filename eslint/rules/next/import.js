// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      files: ["pages/**/*.{js,jsx,ts,tsx}", "next.config.{js,cjs,mjs}"],
      rules: {
        "import/no-default-export": ["off"],
      },
    },
  ],
};

module.exports = config;
