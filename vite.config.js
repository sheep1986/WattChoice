import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // VERSION 8 - Force new file names
        entryFileNames: 'v8-[name]-[hash].js',
        chunkFileNames: 'v8-[name]-[hash].js',
        assetFileNames: 'v8-[name]-[hash].[ext]'
      }
    }
  }
})