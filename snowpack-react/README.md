# New Snowpack React project

> ✨ Bootstrapped with Create Snowpack App (CSA).

Starter project for React, preconfigured with React Router and folder structure inspired by Gatsby.

Includes `lint`, `test` and `build` pipeline confugured with TypeScript, Sass, Eslint, Prettier, Stylelint, Web Test Runner and Rollup.

## Available Scripts

```shell
yarn dev
```

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

```shell
yarn build
```

Builds a static copy of your site to the `build/` folder.

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

```shell
yarn serve
```

Serve to production build from the build folder.

```shell
yarn clean
```

Deletes the `build/` folder and clears the cache.

```shell
yarn lint
```

Lints js with Eslint, checks formatting of js and html with Prettier, scss with Stylelint.
Prettier and Stylelint have different opinions about how to format scss, therefore Prettier is configured to ignore stylesheets and formatting is handled by Prettier.

```shell
yarn fix
```

The same as `yarn lint` with fixes.

```shell
yarn test
```

Runs unit tests with Web Test Runner.

### Using streaming imports with Snowpack

When enabled, the command `run snowpack dev` will start fetching all imports from [https://pkg.snowpack.dev](https://pkg.snowpack.dev).

[Streaming Imports documentation](https://www.snowpack.dev/guides/streaming-imports).
