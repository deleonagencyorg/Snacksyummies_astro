import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      // Configuración explícita de Tailwind
      config: { path: './tailwind.config.js' },
      // Asegurarse de que Tailwind se aplique a todos los archivos
      applyBaseStyles: true,
    }),
  ],
  build: {
    // Inline small assets to reduce HTTP requests
    inlineStylesheets: 'auto',
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'swiper': ['swiper']
        }
      }
    }
  },
  vite: {
    build: {
      // Optimize CSS
      cssCodeSplit: true,
      // Use esbuild for minification (faster and no extra deps)
      minify: 'esbuild',
      target: 'es2020'
    },
    // Optimize images
    assetsInclude: ['**/*.webp', '**/*.avif']
  }
});