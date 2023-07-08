#!/usr/bin/env node

const fs = require("fs/promises");

const packageJson = require("../package.json");

const prepareGitHub = async () => {
  packageJson.publishConfig = {
    access: "restricted",
    registry: "https://npm.pkg.github.com",
  };

  await fs.writeFile("./package.json", `${JSON.stringify(packageJson, null, 2)}\n`);
};

void prepareGitHub();
