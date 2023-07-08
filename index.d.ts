/* eslint-disable */

export type EslintConfigName = "base" | "browser-node" | "browser" | "config-authoring" | "config-files" | "jest" | "next" | "node" | "playwright-test" | "react" | "tailwindcss" | "tsup" | "typescript";
export function extendEslint(configNames?: EslintConfigName[], extraConfig?: import("eslint").Linter.Config): any;
export function extendPrettier(config?: import("prettier").Config): import("prettier").Config;

/* eslint-enable */
