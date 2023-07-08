// @ts-check

const pkgJson = require("../../package.json");

const readPackageManager = () => {
  const match = process.env.npm_config_user_agent?.match(/^(?<pm>\w+)\//);
  return match?.groups ? match.groups?.pm : "npm";
};

/**
 * @param {string} configName
 * @param {string} packageName
 */
const requirePackage = (configName, packageName) => {
  try {
    require.resolve(packageName);
  } catch (e) {
    const packageManager = readPackageManager();
    const command = packageManager === "yarn" ? "add" : "install";

    console.error(`The \`${configName}\` config requires an optional peer dependency, which has not been installed.`);
    console.error();
    console.error("To install it, run:");
    console.error(`- ${packageManager} ${command} ${packageName}@${pkgJson.peerDependencies[packageName]}`);

    process.exit(1);
  }
};

module.exports = {
  readPackageManager,
  requirePackage,
};
