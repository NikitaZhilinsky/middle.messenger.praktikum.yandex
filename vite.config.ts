import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
      ],
    }
  }
}) 