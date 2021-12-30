module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["eslint:recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "svelte3", "prettier"],
  parserOptions: {
    ecmaVersion: 2020
  },
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3"
    }
  ],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"]
  },
  settings: {
    "svelte3/typescript": () => require("typescript"),
    "svelte3/ignore-styles": attributes =>
      attributes.lang && attributes.lang.includes("scss")
  }
}
