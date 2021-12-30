/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  alias: {
    "@": "./src"
  },
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" }
  },
  plugins: ["@snowpack/plugin-sass", "@snowpack/plugin-typescript"],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: "none"
  },
  buildOptions: {
    /* ... */
  }
}
