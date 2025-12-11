import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Silence Sass deprecation warnings from node_modules
        quietDeps: true,
        // Optional: silence specific deprecations (if quietDeps isn't enough)
        // silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function']
      }
    }
  }
})
