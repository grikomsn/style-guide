// @ts-check

module.exports = {
  JAVASCRIPT_FILES: ["*.js?(x)", "*.mjs", "*.cjs"],
  JEST_FILES: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  NEXT_CONFIG_FILES: ["next.config.js", "next.config.mjs"],
  TYPESCRIPT_FILES: ["*.d.ts", "*.ts?(x)", "*.mts", "*.cts"],
  TSUP_FILES: ["tsup.config?(.*).{ts,mts,cts,js,mjs,cjs,json}"],
};
