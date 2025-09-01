import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Solar-system/",
  plugins: [react()],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  preview: {
    port: 5173,
    open: true
  },
  build: {
    sourcemap: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'three']
  },
  define: {
    // Flags pour éviter les avertissements React Router
    __REACT_ROUTER_FUTURE_FLAGS__: JSON.stringify({
      v7_startTransition: true,
      v7_relativeSplatPath: true
    })
  }
})
