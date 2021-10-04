/* eslint-env node */
process.env.NODE_ENV = "test"

module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require("@snowpack/web-test-runner-plugin")()]
}
