import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteImages from 'vite-plugin-vue-images';


export default defineConfig({
  base: '/flowershopweb-frontend/',
  plugins: [
    vue(),
    ViteImages({
      dirs: ['src/assets/images', 'src/assets/css'],
      extensions: ['jpg', 'jpeg', 'png', 'svg', 'webp'],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: 'src/assets/images/[name].[ext]',
      }
    }
  }

});
