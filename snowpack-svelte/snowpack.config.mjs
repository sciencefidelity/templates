/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    // directory name: 'build directory'
    public: { url: "/", static: true },
    src: { url: "/dist" }
  },
  alias: {
    "@": "./src",
    lib: "./src/lib",
    routes: "./src/routes",
    styles: "./src/styles"
  },
  plugins: [
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-typescript"
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    knownEntrypoints: ["svelte/store"],
  },
  devOptions: {
    open: "none"
  },
  buildOptions: {
    /* ... */
  }
}
