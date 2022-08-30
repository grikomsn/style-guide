// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      files: ["tsup.config.{js,cjs,mjs,ts}"],
      rules: {
        "import/no-default-export": ["off"],
      },
    },
  ],
};

module.exports = config;
