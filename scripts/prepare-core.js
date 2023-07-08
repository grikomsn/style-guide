#!/usr/bin/env node

const fs = require("fs/promises");
const spawn = require("child_process").spawnSync;

const packageJson = require("../package.json");

const prepareCore = async () => {
  packageJson.name = packageJson.name.replace(/style-guide$/, "style-guide-core");

  const depsToDelete = {
    dependencies: ["eslint-plugin-jsx-a11y", "eslint-plugin-react", "eslint-plugin-react-hooks"],
    optionalDependencies: ["@next/eslint-plugin-next", "eslint-plugin-tailwindcss"],
  };

  for (const [key, deps] of Object.entries(depsToDelete)) {
    for (const dep of deps) {
      delete packageJson[key][dep];
    }
  }

  await fs.writeFile("package.json", `${JSON.stringify(packageJson, null, 2)}\n`);
  await fs.copyFile("README.core.md", "README.md");

  const filesToDelete = [
    "eslint/rules/jsx-a11y.js",
    "eslint/rules/react.js",
    "eslint/next.js",
    "eslint/react.js",
    "eslint/tailwindcss.js",
    "README.core.md",
  ];

  await Promise.all(filesToDelete.map((file) => fs.unlink(file))).catch(() => {});

  spawn("pnpm", ["install"], { shell: true });
};

void prepareCore();
