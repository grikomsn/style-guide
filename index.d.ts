/* eslint-disable */

export type EslintConfigName = "base" | "browser-node" | "browser" | "config-authoring" | "jest" | "next" | "node" | "playwright-test" | "react" | "tailwindcss" | "tsup" | "typescript";
export function extendEslint(configNames?: EslintConfigName[], extraConfig?: import("eslint").Linter.Config): import("eslint").Linter.Config<import("eslint").Linter.RulesRecord, import("eslint").Linter.RulesRecord>;
export function extendPrettier(config?: import("prettier").Config): import("prettier").Config;

/* eslint-enable */
