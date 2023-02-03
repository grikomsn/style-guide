// @ts-check

module.exports = {
  JAVASCRIPT_FILES: ["*.js?(x)", "*.mjs", "*.cjs"],
  JEST_FILES: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  TYPESCRIPT_FILES: ["*.d.ts", "*.ts?(x)", "*.mts", "*.cts"],
  TSUP_FILES: ["tsup.config?(.*).{ts,js,cjs,json}"],
};
