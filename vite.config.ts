import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// @ts-nocheck
import { svgstore } from './src/vite_plugins/svgstore';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgstore()],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://121.196.236.94:3000/',
      }
    }
  }
})
