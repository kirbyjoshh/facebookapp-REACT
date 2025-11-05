import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // dev proxy so client can call /api/posts without CORS in dev
    proxy: {
      '/api': {
        target: 'https://facebookapp-java-1.onrender.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
})