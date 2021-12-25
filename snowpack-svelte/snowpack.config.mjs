/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  alias: {
    components: "./src/components",
    "@": "./src"
  },
  mount: {
    // directory name: 'build directory'
    public: { url: "/", static: true },
    src: { url: "/dist" }
  },
  plugins: [
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-typescript"
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
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
