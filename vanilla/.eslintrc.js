module.exports = {
  plugins: ["@typescript-eslint", "eslint-comments", "promise", "unicorn"],
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    // console is preferred in a Node project
    "no-console": "off",
    // https://basarat.gitbook.io/typescript/main-1/defaultisbad
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    // It's not accurate in the monorepo style
    "import/no-extraneous-dependencies": "off",
    // Allow most functions to rely on type inference
    // @typescript-eslint/explicit-module-boundary-types
    // will ensure exports are typed
    "@typescript-eslint/explicit-function-return-type": "off",
    // Airbnb prefers forEach
    "unicorn/no-array-for-each": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        // Allow CJS until ESM support improves
        "@typescript-eslint/no-var-requires": "off",
        "unicorn/prefer-module": "off",
      },
    },
  ],
};
