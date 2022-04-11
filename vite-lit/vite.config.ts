import { defineConfig } from 'vite'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
})
