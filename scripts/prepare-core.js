#!/usr/bin/env node

const childProcess = require("child_process");
const fs = require("fs/promises");

const packageJson = require("../package.json");
const { readPackageManager } = require("../eslint/utils/package-manager");

const prepareCore = async () => {
  packageJson.name = packageJson.name.replace(/style-guide$/, "style-guide-core");

  const depsToDelete = {
    dependencies: ["eslint-plugin-jsx-a11y", "eslint-plugin-react", "eslint-plugin-react-hooks"],
    peerDependencies: ["tailwindcss"],
    peerDependenciesMeta: ["tailwindcss"],
    optionalDependencies: ["@next/eslint-plugin-next", "eslint-plugin-tailwindcss"],
  };

  for (const [key, deps] of Object.entries(depsToDelete)) {
    for (const dep of deps) {
      delete packageJson[key][dep];
    }
  }

  await fs.writeFile("./package.json", `${JSON.stringify(packageJson, null, 2)}\n`);

  const packageManager = readPackageManager();
  const command = packageManager === "yarn" ? "add" : "install";

  const c1 = childProcess.spawnSync(packageManager, [command]);
  process.stdout.write(c1.stdout.toString());
  process.stderr.write(c1.stderr.toString());

  await fs.copyFile("./README.core.md", "./README.md");
  await fs.unlink("./README.core.md");
};

void prepareCore();
