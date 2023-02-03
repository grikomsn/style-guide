// @ts-check

const packageJson = require("../package.json");

const trimCore = async () => {
  const depsToDelete = {
    dependencies: ["eslint-plugin-jsx-a11y", "eslint-plugin-react", "eslint-plugin-react-hooks"],
    peerDependencies: ["tailwindcss"],
    peerDependenciesMeta: ["tailwindcss"],
    optionalDependencies: ["@next/eslint-plugin-next", "eslint-plugin-jest", "eslint-plugin-tailwindcss"],
  };

  for (const [key, deps] of Object.entries(depsToDelete)) {
    for (const dep of deps) {
      delete packageJson[key][dep];
    }
  }
};

void trimCore();
