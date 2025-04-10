import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {  
    chunkSizeWarningLimit: 2500, // zvýšení limitu velikosti chunku na 2000 kB  
  },  
})
