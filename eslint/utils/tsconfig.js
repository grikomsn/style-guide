// @ts-check

const fs = require("fs");
const path = require("path");

const getTsconfigPath = () => {
  const assumePath = path.resolve(process.cwd(), "tsconfig.json");
  const assumeTypesPath = path.resolve(process.cwd(), "types/tsconfig.json");

  // eslint-disable-next-line no-nested-ternary
  const tsConfig = fs.existsSync(assumePath)
    ? assumePath
    : fs.existsSync(assumeTypesPath)
    ? assumeTypesPath
    : undefined;

  return tsConfig;
};

module.exports = {
  getTsconfigPath,
};
