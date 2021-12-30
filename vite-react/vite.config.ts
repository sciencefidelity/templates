/**
 * @type {import('vite').UserConfig}
 */

import { defineConfig } from "vite"
import { resolve } from "path"
import reactRefresh from "@vitejs/plugin-react-refresh"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "components": resolve(__dirname, "./src/components"),
      "pages": resolve(__dirname, "./src/pages"),
      "styles": resolve(__dirname, "./src/styles")
    }
  }
})
