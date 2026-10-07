import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import PinyAstro from "@pinegrow/piny-astro";
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel(),
  // La página de Guatemala pasó de /gt/productosconcausa a /productosconcausa/gt.
  // Definido aquí (no en vercel.json) para que el adapter de Vercel lo incluya en .vercel/output/config.json
  redirects: {
    '/gt/productosconcausa': { status: 301, destination: '/productosconcausa/gt' },
  },
  integrations: [
    react(),
    PinyAstro(),
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
    assetsInclude: ['**/*.webp', '**/*.avif'],
    server: {
      watch: {
        ignored: ['**/.vercel/**']
      }
    }
  }
});