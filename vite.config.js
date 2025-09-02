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
        
        // Copy static files
        const filesToCopy = [
          'favicon.ico',
          'favicon.png', 
          'apple-touch-icon.png',
          'logo192.png',
          'manifest.json',
          '_redirects',
          'sitemap.xml',
          'sitemap-pages.xml',
          'sitemap-services.xml',
          'robots.txt'
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
    open: true,
    historyApiFallback: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild', // Enable minification for production
    sourcemap: false, // Disable sourcemaps for smaller bundle
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1500, // Warn for large chunks
    rollupOptions: {
      output: {
        // VERSION 9 - Force new file names
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        // Manual chunking for better caching
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
          charts: ['recharts'],
          icons: ['lucide-react']
        }
      }
    }
  }
})