import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Avoid Vercel warning: "Some chunks are larger than 500 kB after minification"
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        // Basic vendor code-splitting to keep app bundle sizes small
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['framer-motion', 'lucide-react']
        }
      }
    }
  }
});



