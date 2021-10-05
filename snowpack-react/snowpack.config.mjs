/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    // directory name: 'build directory'
    public: { url: "/", static: true },
    src: { url: "/dist" }
  },
  alias: {
    "@": "./src",
    components: "./src/components",
    styles: "./src/styles",
  },
  plugins: [
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-typescript"
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/index.html"},
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
