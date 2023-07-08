// @ts-check

const merge = require("lodash.merge");

/**
 * @typedef EslintConfigName
 * @type {"base"|"browser-node"|"browser"|"config-authoring"|"config-files"|"jest"|"next"|"node"|"playwright-test"|"react"|"tailwindcss"|"tsup"|"typescript"}
 */

/**
 * @param {EslintConfigName[]} configNames
 * @param {import("eslint").Linter.Config} extraConfig
 */
const extendEslint = (configNames = [], extraConfig = {}) => {
  /** @type {import("eslint").Linter.Config} */
  const config = {};

  /** @type {import("eslint").Linter.Config["extends"]} */
  const newExtends = [];
  configNames.forEach((name) => {
    require.resolve(`./eslint/${name}`);
  });
  if (typeof extraConfig.extends === "string") {
    newExtends.push(extraConfig.extends);
  }
  if (Array.isArray(extraConfig.extends)) {
    newExtends.push(...extraConfig.extends);
  }
  config.extends = configNames.map((name) => {
    return require.resolve(`./eslint/${name}`);
  });

  /** @type {import("eslint").Linter.Config["ignorePatterns"]} */
  const newIgnorePatterns = [];
  if (typeof extraConfig.ignorePatterns === "string") {
    newIgnorePatterns.push(extraConfig.ignorePatterns);
  }
  if (Array.isArray(extraConfig.ignorePatterns)) {
    newIgnorePatterns.push(...extraConfig.ignorePatterns);
  }
  config.ignorePatterns = newIgnorePatterns;

  if (configNames.includes("typescript")) {
    const { getTsconfigPath } = require("./eslint/utils/tsconfig");

    config.parserOptions = {
      project: getTsconfigPath(),
    };
    config.settings = {
      "import/resolver": {
        typescript: {
          project: getTsconfigPath(),
        },
      },
    };
  }

  return merge(extraConfig, config);
};

/**
 * @param {import("prettier").Config} config
 * @returns {import("prettier").Config}
 */
const extendPrettier = (config = {}) => {
  return merge(require("./prettier"), config);
};

module.exports = {
  extendEslint,
  extendPrettier,
};
