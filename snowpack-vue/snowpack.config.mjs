/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: "/",
    src: "/dist"
  },
  plugins: [
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-vue"
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
