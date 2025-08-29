import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    minify: 'esbuild',
    esbuildOptions: {
      // Temporarily disabled to see deployment markers
      // drop: ['console', 'debugger']
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'chart-vendor': ['recharts'],
          'motion-vendor': ['framer-motion'],
          'utils': ['lucide-react']
        },
        // Force cache busting with v7 prefix
        assetFileNames: 'assets/[name]-v7-[hash][extname]',
        chunkFileNames: 'assets/js/[name]-v7-[hash].js',
        entryFileNames: 'assets/js/[name]-v7-[hash].js'
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'recharts', 'lucide-react']
  },
  preview: {
    port: 3000,
    strictPort: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  }
})