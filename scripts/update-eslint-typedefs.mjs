// @ts-check

import { CodeGenerator } from "@babel/generator";
import parser from "@babel/parser";
import assert from "assert";
import fs from "fs/promises";
import { globby } from "globby";
import path from "path";
import prettier from "prettier";
import ts from "typescript";

const updateEslintTypedefs = async () => {
  const filenames = await globby(["*.js"], { cwd: path.join(process.cwd(), "eslint") });

  const configNames = filenames.map((filename) => filename.replace(/\.js$/, ""));
  const configNameTypeValue = configNames.map((name) => `"${name}"`).join("|");

  const scriptSrc = path.join(process.cwd(), "index.js");
  const scriptContent = await fs.readFile(scriptSrc, { encoding: "utf-8" });
  const ast = parser.parse(scriptContent, { sourceType: "module" });

  assert(Array.isArray(ast.comments));
  const typedefIndex = ast.comments.findIndex((c) => c.type === "CommentBlock" && c.value.includes("EslintConfigName"));

  assert(typedefIndex >= 0);
  ast.comments[typedefIndex].value = `*\n * @typedef EslintConfigName\n * @type {${configNameTypeValue}}\n `;

  const generator = new CodeGenerator(ast, {
    retainLines: true,
    retainFunctionParens: true,
  });
  const { code } = generator.generate();
  await fs.writeFile(scriptSrc, await prettier.format(code, { parser: "babel" }), { encoding: "utf-8" });

  const tsc = ts.createProgram([scriptSrc], {
    allowJs: true,
    declaration: true,
    emitDeclarationOnly: true,
    removeComments: true,
  });
  tsc.emit();

  const scriptDtsSrc = path.join(process.cwd(), "index.d.ts");
  let scriptDtsContent = await fs.readFile(scriptDtsSrc, { encoding: "utf-8" });
  scriptDtsContent = `/* eslint-disable */\n\n${scriptDtsContent}\n/* eslint-enable */\n`;
  await fs.writeFile(scriptDtsSrc, scriptDtsContent, { encoding: "utf-8" });
};

void updateEslintTypedefs();
