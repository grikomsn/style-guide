// @ts-check

const path = require("path");

/**
 * @see https://github.com/prettier/eslint-plugin-prettier/issues/562
 */
const getPrettierPlugin = () => {
  try {
    const prettierSrcPath = require.resolve("prettier");
    const prettierDirPath = prettierSrcPath.replace(path.basename(prettierSrcPath), "");
    const prettierPackageJsonPath = require.resolve(path.resolve(prettierDirPath, "package.json"));

    /** @type {{ version: string }} */
    const { version } = require(prettierPackageJsonPath);

    if (version.startsWith("3")) return "plugin:prettier5/recommended";
    return "plugin:prettier/recommended";
  } catch (error) {
    return "plugin:prettier/recommended";
  }
};

module.exports = {
  getPrettierPlugin,
};
