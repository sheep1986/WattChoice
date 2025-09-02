import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-files',
      closeBundle() {
        // Ensure dist directory exists
        if (!existsSync('dist')) {
          mkdirSync('dist', { recursive: true })
        }
        
        // Copy favicon files
        const filesToCopy = [
          'favicon.ico',
          'favicon.png', 
          'apple-touch-icon.png',
          'logo192.png',
          'manifest.json'
        ]
        
        filesToCopy.forEach(file => {
          const src = resolve('public', file)
          const dest = resolve('dist', file)
          if (existsSync(src)) {
            copyFileSync(src, dest)
            console.log(`Copied ${file} to dist/`)
          }
        })
      }
    }
  ],
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