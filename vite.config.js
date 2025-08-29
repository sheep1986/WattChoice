import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: false, // TEMPORARILY DISABLE MINIFICATION
    rollupOptions: {
      output: {
        // VERSION 9 - Force new file names
        entryFileNames: 'v9-[name]-[hash].js',
        chunkFileNames: 'v9-[name]-[hash].js',
        assetFileNames: 'v9-[name]-[hash].[ext]'
      }
    }
  }
})