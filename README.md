# @grikomsn/style-guide

![version](https://badgen.net/npm/v/@grikomsn/style-guide)
![downloads](https://badgen.net/npm/dt/@grikomsn/style-guide)
![license](https://badgen.net/npm/license/@grikomsn/style-guide)

ESLint and Prettier style guide for various personal projects, which includes configs for popular linting and styling tools. Heavily based on [Vercel's style guide](https://github.com/vercel/style-guide).

The following configs are available, and are designed to be used together.

- [Prettier](#prettier)
- [ESLint](#eslint)
- [TypeScript](#typescript)

---

## Installing

```sh
# using npm
npm install --save-dev @grikomsn/style-guide

# using yarn
yarn add --dev @grikomsn/style-guide

# using pnpm
pnpm install --save-dev @grikomsn/style-guide
```

Some of our ESLint configs require peer dependencies. We'll note those
alongside the available configs in the [ESLint](#eslint) section.

## Prettier

> Note: Prettier is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: https://prettier.io/docs/en/install.html

To use the shared Prettier config, set the following in `package.json`.

```json
{
  "prettier": "@grikomsn/style-guide/prettier"
}
```

## ESLint

> Note: ESLint is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: https://eslint.org/docs/user-guide/getting-started#installation-and-usage

This ESLint config is designed to be composable.

The following base configs are available. You can use one or both of these
configs, but they should always be first in `extends`:

- `@grikomsn/style-guide/eslint/browser`
- `@grikomsn/style-guide/eslint/node`

Note that you can scope configs, so that configs only target specific files.
For more information, see: [Scoped configuration with `overrides`](#scoped-configuration-with-overrides).

The following additional configs are available:

- `@grikomsn/style-guide/eslint/jest` (requires [`eslint-plugin-jest`](https://npm.im/eslint-plugin-jest) and [`eslint-plugin-testing-library`](https://npm.im/eslint-plugin-testing-library) to be installed)
- `@grikomsn/style-guide/eslint/next` (requires `@next/eslint-plugin-next` to be installed at the same version as `next`)
- `@grikomsn/style-guide/eslint/playwright-test` (requires [`eslint-plugin-playwright`](https://npm.im/eslint-plugin-playwright) to be installed)
- `@grikomsn/style-guide/eslint/react`
- `@grikomsn/style-guide/eslint/tailwindcss` (requires [`tailwindcss`](https://npm.im/tailwindcss) to be installed)
- `@grikomsn/style-guide/eslint/typescript` (requires [`typescript`](https://npm.im/typescript) to be installed and [additional configuration](#configuring-eslint-for-typescript))

> You'll need to use `require.resolve` to provide ESLint with absolute paths,
> due to an issue around ESLint config resolution (see
> [eslint/eslint#9188](https://github.com/eslint/eslint/issues/9188)).

For example, use the shared ESLint config(s) in a Next.js project, set the
following in `.eslintrc.js`.

```js
module.exports = {
  extends: [
    require.resolve("@grikomsn/style-guide/eslint/browser"),
    require.resolve("@grikomsn/style-guide/eslint/react"),
    require.resolve("@grikomsn/style-guide/eslint/next"),
  ],
};
```

### Configuring ESLint for TypeScript

Some of the rules enabled in the TypeScript config require additional type
information, you'll need to provide the path to your `tsconfig.json`.

For more information, see: https://typescript-eslint.io/docs/linting/type-linting

```js
const { getTsconfigPath } = require("@grikomsn/style-guide/eslint/helpers");

const tsconfigPath = getTsconfigPath();

module.exports = {
  extends: [
    require.resolve("@grikomsn/style-guide/eslint/node"),
    require.resolve("@grikomsn/style-guide/eslint/typescript"),
  ],
  parserOptions: {
    project: tsconfigPath,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: tsconfigPath,
      },
    },
  },
  root: true,
};
```

### Configuring custom components for `jsx-a11y`

It's common practice for React apps to have shared components like `Button`,
which wrap native elements. You can pass this information along to `jsx-a11y`
via the `components` setting.

The below list is not exhaustive.

```js
module.exports = {
  root: true,
  extends: [require.resolve("@vercel/style-guide/eslint/react")],
  settings: {
    "jsx-a11y": {
      components: {
        Article: "article",
        Button: "button",
        Image: "img",
        Input: "input",
        Link: "a",
        Video: "video",
      },
    },
  },
};
```

### Scoped configuration with `overrides`

ESLint configs can be scoped to include/exclude specific paths. This ensures
that rules don't "leak" to places where those rules don't apply.

In this example, Jest rules are only being applied to files matching Jest's
default test match pattern.

```js
module.exports = {
  extends: [require.resolve("@grikomsn/style-guide/eslint/node")],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: [require.resolve("@grikomsn/style-guide/eslint/jest")],
    },
  ],
};
```

#### A note on file extensions

By default, all TypeScript rules are scoped to files ending with `.ts` and
`.tsx`.

However, when using overrides, file extensions must be included or ESLint will
only include `.js` files.

```js
module.exports = {
  overrides: [
    {
      files: ["directory/**/*.[jt]s?(x)"],
      rules: {
        "my-rule": ["off"],
      },
    },
  ],
};
```

## TypeScript

To use the shared TypeScript config, set the following in `tsconfig.json`.

```json
{
  "extends": "@grikomsn/style-guide"
}
```

The following optional configs are available:

- `@grikomsn/style-guide/tsconfig` (same as `@grikomsn/style-guide`)
- `@grikomsn/style-guide/tsconfig/next` (for Next.js projects)

## Acknowledgements

- https://github.com/vercel/style-guide

## License

[Mozilla Public License Version 2.0](./LICENSE.txt)
