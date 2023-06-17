// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  rules: {
    "import/extensions": ["off"],
    "import/first": ["error"],
    "import/namespace": ["off"],
    "import/newline-after-import": ["warn"],
    "import/no-absolute-path": ["error"],
    "import/no-cycle": ["off"],
    "import/no-default-export": ["error"],
    "import/no-mutable-exports": ["error"],
    "import/no-relative-packages": ["warn"],
    "import/no-self-import": ["error"],
    "import/no-useless-path-segments": ["error"],
    "import/order": ["off"],
    "simple-import-sort/exports": ["warn"],
    "simple-import-sort/imports": ["warn"],
    "sort-imports": ["off"],
    "unused-imports/no-unused-imports": ["error"],
  },
};

module.exports = config;
