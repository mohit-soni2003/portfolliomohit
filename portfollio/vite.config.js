import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // Or use "0.0.0.0" to bind to all interfaces
    port: 3000, 
    proxy:{
      '/api': 'http://localhost:8000/' // Corrected the typo here
    }  // You can specify any port you prefer
  },
})